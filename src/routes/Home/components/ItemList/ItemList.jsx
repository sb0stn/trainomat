import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ListItem from "../../../../components/ListItem/ListItem.jsx";
import styles from "./ItemList.module.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import LoadNewPageIndicator from "./components/LoadNewPageIndicator.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function SearchResults({ setStatus }) {
  const { ref, inView } = useInView();
  const navigate = useNavigate();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const q = searchParams.get("q") ?? "";
  const tags = searchParams.getAll("tags");
  const sort = searchParams.get("sort") ?? "title"; //define default "title"
  const direction = searchParams.get("direction") ?? "asc"; //define default "asc"

  const {
    data: items,
    status,
    error,
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

  //Triggered by Sort Click
  //add sort and direction param to url
  function handleSort(sortParam) {
    //if sortparam is the previous -> reverse direction
    const reverseDirection =
      sortParam === sort ? (direction === "asc" ? "desc" : "asc") : direction;

    navigate(
      `?q=${q}&tags=${tags}&sort=${sortParam}&direction=${reverseDirection}`
    );
  }

  return (
    <>
      <div className={styles.table_container}>
        <h2 style={{ margin: "24px 12px" }}>
          Suchergebnisse: {items?.pages[0]?.totalResults}
        </h2>
        <table className={styles.table}>
          <thead style={{ textAlign: "left" }}>
            <tr className={styles.row}>
              <th
                tabIndex={0}
                onClick={() => handleSort("title")}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSort("title");
                  }
                }}
                className={`${styles.clickable} ${
                  sort === "title" ? styles.active : ""
                }`}
              >
                Titel
                {direction === "desc" && sort === "title" ? (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`${styles.chevron} ${
                      sort !== "title" ? styles.chevronInactive : ""
                    }`}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className={`${styles.chevron} ${
                      sort !== "title" ? styles.chevronInactive : ""
                    }`}
                  />
                )}
              </th>
              <th
                tabIndex={0}
                onClick={() => handleSort("dateAdded")}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSort("dateAdded");
                  }
                }}
                className={`${styles.clickable} ${
                  sort === "dateAdded" ? styles.active : ""
                }`}
                style={{ paddingLeft: "4px" }}
              >
                Datum
                {direction === "desc" && sort === "dateAdded" ? (
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`${styles.chevron} ${
                      sort !== "dateAdded" ? styles.chevronInactive : ""
                    }`}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faChevronUp}
                    className={`${styles.chevron} ${
                      sort !== "dateAdded" ? styles.chevronInactive : ""
                    }`}
                  />
                )}
              </th>

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
            <Skeleton
              count={20}
              style={{
                height: "32px",
                marginBottom: "8px",
                zIndex: -1,
              }}
            />
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
      </div>
    </>
  );
}
