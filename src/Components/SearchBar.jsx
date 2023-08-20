import { Form, useSubmit } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Select from "react-select";
import { useDebounce } from "rooks";

export default function SearchBar() {
  const submit = useSubmit();
  const debouncedSubmit = useDebounce(submit, 500);

  const { isLoading, isError, data, error } = useQuery(["tags"], async () => {
    const response = await fetch(
      "https://api.zotero.org/groups/2580211/tags?limit=100/"
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  });

  if (isLoading) {
    return "Loading";
  }

  console.log(data);

  const tags = data.map((tag) => {
    return { value: tag.tag, label: tag.tag };
  });

  return (
    <Form method="get" action="/">
      <input
        type="search"
        aria-label="search products"
        name="q"
        placeholder="Suchbegriff eingeben"
        className="search"
        onChange={(event) => debouncedSubmit(event.currentTarget.form)}
      />
      <Select
        name="tags"
        options={tags}
        isMulti
        placeholder="Tags auswählen"
        closeMenuOnSelect={false}
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
      <button type="submit">Suche</button>
    </Form>
  );
}
