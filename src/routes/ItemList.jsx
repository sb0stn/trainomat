import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import ListItem from "../components/ListItem.jsx";
import styles from "./ItemList.module.css";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";

export default function SearchResults() {
  const { ref, inView } = useInView();
  const { q, tags } = useLoaderData();
  const {
    data: items,
    status,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(itemsQuery(q, tags));

  if (!items) {
    return <p>loading</p>;
  }

  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);

  return status === "loading" ? (
    <p>Loading...</p>
  ) : status === "error" ? (
    <p>Error: {error.message}</p>
  ) : (
    <>
      <table className={styles.table}>
        <thead style={{ textAlign: "left" }}>
          <tr className={styles.row}>
            <th>Titel</th>
            <th>Datum</th>
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
          {/*           {items.pages[0].data.map((item, index) => {
            return <ListItem item={item} index={index} key={index} />;
          })} */}
        </tbody>
      </table>
      <button
        style={{ visibility: "hidden" }}
        ref={ref}
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        Next
      </button>
    </>
  );
}

const itemsQuery = (q, tags) => ({
  queryKey: ["items", q, tags],
  queryFn: async ({ pageParam = 0 }) => {
    const url = new URL("https://api.zotero.org/groups/2580211/items");

    q && url.searchParams.append("q", q);

    tags.forEach((tag) => {
      url.searchParams.append("tag", tag);
    });

    url.searchParams.append("limit", 100);
    url.searchParams.append("start", pageParam);

    const response = await fetch(url);

    // Extract and parse Link Header to determine pagination
    const linkHeader = response.headers.get("Link");
    const nextPageLink =
      linkHeader && linkHeader.match(/<([^>]+)>; rel="next"/);
    const nextCursorFromLink =
      nextPageLink && new URL(nextPageLink[1]).searchParams.get("start");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return { data: await response.json(), nextId: nextCursorFromLink };
  },
  getNextPageParam: (lastPage, pages) => lastPage.nextId,
});

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const tags = url.searchParams.getAll("tags");

    const query = itemsQuery(q, tags);

    queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchInfiniteQuery(query));

    return { q, tags };
  };
