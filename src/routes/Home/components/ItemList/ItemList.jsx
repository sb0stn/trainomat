import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ListItem from "../../../../components/ListItem/ListItem.jsx";
import styles from "./ItemList.module.scss";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import LoadNewPageIndicator from "./components/LoadNewPageIndicator.jsx";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Select, {components} from "react-select";
import { germanAriaLiveMessages } from "../../../../helper/reactSelectGerman";
import CaretDown from "../../../../components/CaretDown/CaretDown";


const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <CaretDown/>
    </components.DropdownIndicator>
  );
};

export default function SearchResults({ setStatus }) {
  const { ref, inView } = useInView();
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const q = searchParams.get("q") ?? "";
  const tags = searchParams.getAll("tags");
  const sort = searchParams.get("sort") ?? "date"; //define default "title"
  const direction = searchParams.get("direction") ?? "desc"; //define default "asc"
  const [selectedOption, setSelectedOption] = useState(null);

  const sortOptions = [
    {
      label: "Titel aufsteigend A-Z",
      value: "titleAsc",
      direction: "asc",
      zoteroValue: "title",
    },
    {
      label: "Titel absteigend Z-A",
      value: "titleDesc",
      direction: "desc",
      zoteroValue: "title",
    },
    {
      label: "Älteste zuerst",
      value: "dateAsc",
      direction: "asc",
      zoteroValue: "date",
    },
    {
      label: "Neueste zuerst",
      value: "dateDesc",
      direction: "desc",
      zoteroValue: "date",
    },
    {
      label: "Typ aufsteigend A-Z",
      value: "itemTypeAsc",
      direction: "asc",
      zoteroValue: "itemType",
    },
    {
      label: "Neueste hinzugefügt",
      value: "dateAddedDesc",
      direction: "desc",
      zoteroValue: "dateAdded",
    },
  ];

  const {
    data: items,
    status,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["items", q, tags, sort, direction],
    queryFn: async ({ pageParam = 0 }) => {
      const url = new URL("https://api.zotero.org/groups/4624031/items");

      tags.forEach((tag) => {
        url.searchParams.append("tag", tag);
      });

      q && url.searchParams.append("q", q);
      url.searchParams.append("limit", 50);
      url.searchParams.append("start", pageParam);
      url.searchParams.append("sort", sort ?? "title");
      url.searchParams.append("direction", direction ?? "asc");

      const response = await fetch(url);

      // Extract and parse Link Header to determine pagination
      const linkHeader = response.headers.get("Link");
      const nextPageLink =
        linkHeader && linkHeader.match(/<([^>]+)>; rel="next"/);
      const nextCursorFromLink =
        nextPageLink && new URL(nextPageLink[1]).searchParams.get("start");

      const totalResults = response.headers.get("Total-Results");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return {
        data: await response.json(),
        nextId: nextCursorFromLink,
        totalResults,
      };
    },
    getNextPageParam: (lastPage, pages) => lastPage.nextId,
  });

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  useEffect(() => {
    setStatus(status);
  }, [status]);

  useEffect(() => {
    const foundOption = sortOptions.find(
      (option) =>
        option.value.toLowerCase() === `${sort}${direction}`.toLowerCase() &&
        option.direction.toLowerCase() === direction.toLowerCase()
    );

    setSelectedOption(foundOption || null);
  }, [location]);

  function handleSort(sortParam) {
    navigate(
      `?q=${q}&tags=${tags}&sort=${sortParam.zoteroValue}&direction=${sortParam.direction}`
    );
  }

  return (
    <section aria-labelledby="search-headline" className={styles.table_container}>
      <div className={styles.results_head}>
        <h2
          id="search-headline"
          style={{
            margin: "16px 12px",
            visibility: status === "loading" ? "hidden" : "visible",
          }}
          aria-live="polite"
        >
          {items?.pages[0]?.totalResults === 1
            ? "Suchergebnis"
            : `${items?.pages[0]?.totalResults} Suchergebnisse`}{" "}
        </h2>

        <form role="region" aria-label="Sortieren">
          <h3>Sortieren</h3>

          <Select
          components={{DropdownIndicator}}
          ariaLiveMessages={germanAriaLiveMessages}
           styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              outline: state.isFocused ? "2px solid #1c589d" : "",
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              textDecoration: state.isFocused ? "underline" : "",
            }
            ),
          }}
            options={sortOptions}
            defaultValue={sortOptions[3]}
            value={selectedOption}
            onChange={(selectedOption) => handleSort(selectedOption)}
            placeholder="Sortieren nach..."
          />
        </form>
      </div>
      <table className={styles.table}>
        <thead style={{ textAlign: "left" }}>
          <tr className={styles.row}>
            <th>Titel</th>
            <th t>Datum</th>

            <th>Autor</th>
            <th>Typ</th>
          </tr>
        </thead>

        {status === "success" ? (
          <tbody>
            {items.pages.map((page) => {
              return (
                <React.Fragment key={page.nextId}>
                  {page.data.map((item, index) => {
                    return <ListItem item={item} index={index} key={index} />;
                  })}
                </React.Fragment>
              );
            })}
          </tbody>
        ) : (
          <td>
            <Skeleton
              count={20}
              style={{
                height: "32px",
                marginBottom: "8px",
                zIndex: -1,
              }}
            />
          </td>
        )}
      </table>
      {status === "success" ? (
        <LoadNewPageIndicator
          isFetchingNextPage={isFetchingNextPage}
          pages={items?.pages}
        />
      ) : (
        <></>
      )}

      <button style={{ visibility: "hidden" }} ref={ref} />
      {/* Element to detect end of page */}
    </section>
  );
}
