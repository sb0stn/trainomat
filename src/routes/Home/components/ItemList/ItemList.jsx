import React, { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import ListItem from "../../../components/ListItem/ListItem.jsx";
import styles from "./ItemList.module.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import LoadNewPageIndicator from "./components/LoadNewPageIndicator.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

export default function SearchResults() {
  const { ref, inView } = useInView();
  const navigate = useNavigate();
  const { q, tags, sort, direction } = useLoaderData();
  const {
    data: items,
    status,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(itemsQuery(q, tags, sort, direction));

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  function handleSort(sortParam) {
    const reverseDirection = direction === "asc" ? "desc" : "asc";
    navigate(`?sort=${sortParam}&direction=${reverseDirection}`);
  }

  return status === "loading" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      <div className={styles.table_container}>
        <h2 style={{ margin: "24px 12px" }}>
          Suchergebnisse: {items?.pages[0]?.totalResults}
        </h2>
        <table className={styles.table}>
          <thead style={{ textAlign: "left" }}>
            <tr className={styles.row}>
              <th onClick={() => handleSort("title")}>
                Titel
                {direction == "desc" && sort == "title" ? (
                  <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </th>
              <th onClick={() => handleSort("dateAdded")}>
                Datum
                {direction == "desc" && sort == "dateAdded" ? (
                  <FontAwesomeIcon icon={faChevronUp} />
                ) : (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
              </th>
              {/* <th>Rating</th> */}
              <th>Typ</th>
              {/* <th>Rolle</th> */}
              {/* <th>Skill Level</th> */}
            </tr>
          </thead>
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
        </table>
        <LoadNewPageIndicator
          isFetchingNextPage={isFetchingNextPage}
          pages={items?.pages}
        />
        <button
          style={{ visibility: "hidden" }}
          ref={ref}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          Next
        </button>
      </div>
    </>
  );
}

const itemsQuery = (q, tags, sort, direction) => ({
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
      totalResults: totalResults,
    };
  },
  getNextPageParam: (lastPage, pages) => lastPage.nextId,
});

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q") ?? "";
    const tags = url.searchParams.getAll("tags");
    const sort = url.searchParams.get("sort");
    const direction = url.searchParams.get("direction");

    const query = itemsQuery(q, tags);

    queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchInfiniteQuery(query));

    return { q, tags, sort, direction };
  };
