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

  const contentOptions = [];
  const certificateOptions = [];
  const freeOrFeeOptions = [];
  const languageOptions = [];
  const licencesOptions = [];
  const operatingSystemOptions = [];
  const programOptions = [];
  const roleOptions = [];
  const ratingOptions = [];
  const skillLevelOptions = [];
  const technologyOptions = [];
  const typeOfResourceOptions = [];
  const othersOptions = [];

  const optionsMapping = {
    C: contentOptions,
    Ce: certificateOptions,
    F: freeOrFeeOptions,
    La: languageOptions,
    Li: licencesOptions,
    OS: operatingSystemOptions,
    P: programOptions,
    R: roleOptions,
    Ra: ratingOptions,
    SL: skillLevelOptions,
    T: technologyOptions,
    Ty: typeOfResourceOptions,
  };

  let groupedTags = [
    { label: "Content", options: contentOptions },
    { label: "Certificate", options: certificateOptions },
    { label: "Free or Fee", options: freeOrFeeOptions },
    { label: "Language", options: languageOptions },
    { label: "Licences", options: licencesOptions },
    { label: "Operating Systems", options: operatingSystemOptions },
    { label: "Programs", options: programOptions },
    { label: "Role", options: roleOptions },
    { label: "Rating", options: ratingOptions },
    { label: "Skill Level", options: skillLevelOptions },
    { label: "Technology", options: technologyOptions },
    { label: "Type of Resource", options: typeOfResourceOptions },
    { label: "Others", options: othersOptions },
  ];

  if (!isLoading) {
    const tags = data.map((tag) => {
      const matches = tag.tag.match(/\((.*?)\)/); // Extract text inside parentheses
      if (matches && matches[1]) {
        const abbreviation = matches[1];
        const optionArray = optionsMapping[abbreviation];
        if (optionArray) {
          optionArray.push({ value: tag.tag, label: tag.tag });
          return { value: tag.tag, label: tag.tag };
        }
      }
      othersOptions.push({ value: tag.tag, label: tag.tag }); // Push to othersOptions array
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
        options={groupedTags}
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
