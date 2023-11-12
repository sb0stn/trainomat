import { Form, useSubmit } from "react-router-dom";
import { useInfiniteQuery } from "@tanstack/react-query";
import Select from "react-select";
import { useDebounce } from "rooks";
import { useEffect, useState } from "react";
import styles from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ status }) {
  const submit = useSubmit();
  const debouncedSubmit = useDebounce(submit, 200);
  const [inputValue, setInputValue] = useState("");
  const [queryString, setQueryString] = useState("");
  const [selectedTags, setSelectedTags] = useState();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tagsParam = searchParams.getAll("tags");

    if (tagsParam.length > 0) {
      const tags = tagsParam
        .filter((tag) => tag.trim() !== "") // Filter out empty string elements
        .map((tag) => ({
          value: tag.replace(/\+/g, " ").trim(),
          label: tag.replace(/\+/g, " ").trim(),
        }));
      setSelectedTags(tags);
    }

    const qParam = searchParams.get("q");
    if (qParam) {
      setQueryString(qParam);
      setInputValue(qParam); // Set the input value from the query string
    }
  }, []);

  const { data, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ["tags"],
    queryFn: async ({ pageParam = 0 }) => {
      const url = new URL(`https://api.zotero.org/groups/4624031/tags`);
      url.searchParams.append("limit", 100);
      url.searchParams.append("start", pageParam);

      const response = await fetch(url);

      const linkHeader = response.headers.get("Link");
      const nextPageLink =
        linkHeader && linkHeader.match(/<([^>]+)>; rel="next"/);
      const nextCursorFromLink =
        nextPageLink && new URL(nextPageLink[1]).searchParams.get("start");

      return {
        data: await response.json(),
        nextId: nextCursorFromLink || null,
      };
    },
    getNextPageParam: (lastPage, pages) => lastPage.nextId,
  });

  // useEffect verwenden, um fetchNextPage nach dem ersten Laden aufzurufen
  useEffect(() => {
    if (!isLoading && hasNextPage) {
      fetchNextPage();
    }
  }, [isLoading, hasNextPage, fetchNextPage]);

  const applicationOptions = [];
  const operatingSystemOptions = [];
  const recommendationOptions = [];
  const formatOptions = [];
  const contentOptions = [];
  const costOptions = [];
  const licenseOptions = [];
  const miniWorkshopOptions = [];
  const notAccessibleOptions = [];
  const qualificationOptions = [];
  const roleOptions = [];
  const languageOptions = [];
  const technologyOptions = [];
  const userDiversityOptions = [];
  const cpaccCourseOptions = [];
  const certificateOptions = [];
  const othersOptions = [];

  const optionsMapping = {
    A: applicationOptions,
    B: operatingSystemOptions,
    E: recommendationOptions,
    F: formatOptions,
    I: contentOptions,
    K: costOptions,
    L: licenseOptions,
    M: miniWorkshopOptions,
    N: notAccessibleOptions,
    Q: qualificationOptions,
    R: roleOptions,
    S: languageOptions,
    T: technologyOptions,
    V: userDiversityOptions,
    W1: cpaccCourseOptions,
    Z: certificateOptions,
  };

  let groupedTags = [
    { label: "Anwendungen", options: applicationOptions },
    { label: "Betriebssysteme", options: operatingSystemOptions },
    { label: "Empfehlungen", options: recommendationOptions },
    { label: "Formate", options: formatOptions },
    { label: "Inhalt", options: contentOptions },
    { label: "Kosten", options: costOptions },
    { label: "Lizenzen", options: licenseOptions },
    { label: "Mini-Workshops", options: miniWorkshopOptions },
    { label: "Nicht zugänglich für", options: notAccessibleOptions },
    { label: "Qualifikation", options: qualificationOptions },
    { label: "Rollen", options: roleOptions },
    { label: "Sprachen", options: languageOptions },
    { label: "Technologien", options: technologyOptions },
    { label: "Vielfalt der Benutzergruppen", options: userDiversityOptions },
    { label: "CPACC-Kurs", options: cpaccCourseOptions },
    { label: "Zertifikate", options: certificateOptions },
    { label: "Andere", options: othersOptions },
  ];

  if (!isLoading) {
    const tags = data.pages.map((page) => {
      page.data.map((tag) => {
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
    });
  }

  return (
    <Form method="get" action="/" className={styles.form}>
      <div className={styles.container}>
        <h1>Suche nach Ressourcen zu digitaler Barrierefreiheit</h1>
        <input
          type="search"
          aria-label="search products"
          name="q"
          placeholder="Suchbegriff eingeben"
          value={inputValue} // Update the value prop with inputValue
          className={styles.search}
          onChange={(event) => {
            setInputValue(event.currentTarget.value); // Update inputValue state
            debouncedSubmit(event.currentTarget.form);
          }}
        />
        <Select
          name="tags"
          options={groupedTags}
          isMulti
          placeholder="Tags auswählen"
          closeMenuOnSelect={true}
          value={selectedTags}
          hideSelectedOptions={false}
          onChange={(selectedValue, action) => {
            console.log(selectedValue);
            const tagString =
              selectedValue.length > 0
                ? selectedValue.reduce((acc, tag) => {
                    return `${acc}&tags=${tag.value}`;
                  }, "")
                : "";
            setSelectedTags(selectedValue);
            submit(`?q=${inputValue}${tagString}`);
          }}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              border: "none",
            }),
            placeholder: (baseStyles, state) => ({
              ...baseStyles,
              color: "#04182F70",
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              color: state.isSelected
                ? "white"
                : state.isFocused
                ? "white"
                : "black",
              backgroundColor:
                state.isFocused && state.isSelected
                  ? "#FF5959"
                  : state.isSelected
                  ? "#092D57"
                  : state.isFocused
                  ? "#59A6FF"
                  : "#E6E6E6",
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
        <button
          className={status == "loading" ? styles.loadingButton : styles.button}
          disabled={status == "loading"}
        >
          <span style={{ marginRight: "8px" }}>Suchen</span>
          {status == "loading" ? (
            <FontAwesomeIcon
              icon={faCircleNotch}
              className={`${styles.spinner} ${styles.icon}`}
            />
          ) : (
            <></>
          )}
        </button>
      </div>
    </Form>
  );
}
