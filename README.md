# Anleitungen
## Tags bearbeiten
Es können Tags an zwei Stellen bearbeitet werden: In der Suche und auf der Info-Seite

### Suche
Um eine neue Kategorie anzulegen muss eine neue `const newCategoryOptions = [];` angelegt werden. Diese muss in der `optionsMapping` dann auf einen Buchstaben gemappt werden. Anschließend muss diese in die `groupedTags` aufgenommen werden.

### Info
Um eine neue Kategorie anzulegen muss ein neues Element in die `tagsData` aufgenommen werden. In der `categoriesData` werden Beschreibungen für die Tags hinterlegt.
