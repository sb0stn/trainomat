import ItemList from "./components/ItemList/ItemList.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";

export default function Home() {
  return (
    <main>
      <SearchBar />
      <ItemList />;
    </main>
  );
}
