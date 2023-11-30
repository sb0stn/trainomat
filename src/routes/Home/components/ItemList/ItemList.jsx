import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ListItem from "../../../../components/ListItem/ListItem.jsx";
import styles from "./ItemList.module.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import LoadNewPageIndicator from "./components/LoadNewPageIndicator.jsx";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Select from "react-select";

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

  const options = [
    {
      label: "Titel (aufsteigend)",
      value: "titleAsc",
      direction: "asc",
      zoteroValue: "title",
    },
    {
      label: "Titel (absteigend)",
      value: "titleDesc",
      direction: "desc",
      zoteroValue: "title",
    },
    {
      label: "Datum (aufsteigend)",
      value: "dateAsc",
      direction: "asc",
      zoteroValue: "date",
    },
    {
      label: "Datum (absteigend)",
      value: "dateDesc",
      direction: "desc",
      zoteroValue: "date",
    },
    {
      label: "Typ (aufsteigend)",
      value: "itemTypeAsc",
      direction: "asc",
      zoteroValue: "itemType",
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
      url.searchParams.append("limit", 100);
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
    const foundOption = options.find(
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
    <main aria-labelledby="search-headline" className={styles.table_container}>
      <div className={styles.results_head}>
        <h2
          id="search-headline"
          style={{ margin: "16px 12px" }}
          aria-live="polite"
        >
          Suchergebnisse {items?.pages[0]?.totalResults}
        </h2>
        <form role="form" aria-label="Sortieren">
          <label>Sortieren</label>
          <Select
            options={options}
            defaultValue={options[3]}
            value={selectedOption}
            isSearchable="false"
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
    </main>
  );
}
