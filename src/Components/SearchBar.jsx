import { Form, useSubmit } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Select from "react-select";
import { useDebounce } from "rooks";
import { useState } from "react";

export default function SearchBar() {
  const submit = useSubmit();
  const debouncedSubmit = useDebounce(submit, 100);
  const [queryString, setQueryString] = useState("");

  const { isLoading, isError, data, error } = useQuery(["tags"], async () => {
    const response = await fetch(
      "https://api.zotero.org/groups/2580211/tags?limit=100/"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  });

  let tags;
  if (!isLoading) {
    tags = data.map((tag) => {
      return { value: tag.tag, label: tag.tag };
    });
  }

  return (
    <Form method="get" action="/">
      <input
        style={{ fontSize: "16px" }}
        type="search"
        aria-label="search products"
        name="q"
        placeholder="Suchbegriff eingeben"
        className="search"
        onChange={(event) => {
          setQueryString(event.currentTarget.value);
          debouncedSubmit(event.currentTarget.form);
        }}
      />
      <Select
        name="tags"
        options={tags}
        isMulti
        placeholder="Tags auswählen"
        closeMenuOnSelect={true}
        onChange={(selectedValue, action) => {
          let tagString = "";
          selectedValue.map((tag) => (tagString += `&tags=${tag.value}`));

          submit(`?q=${queryString}&${tagString}`);
        }}
        styles={{
          option: (baseStyles, state) => ({
            ...baseStyles,
            color: "black",
            backgroundColor: state.isFocused ? "#d4d4d4" : "#E6E6E6",
            borderRadius: "2px",
            padding: "2px 8px",
            width: "fit-content",
            display: "inline-block",
            margin: "2px",
          }),
          menuList: (baseStyles, state) => ({
            ...baseStyles,
            padding: "4px 8px",
          }),
        }}
      />
    </Form>
  );
}
