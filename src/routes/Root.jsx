import { Outlet } from "react-router-dom";
import SearchBar from "./components/SearchBar.jsx";
import "./Root.css";

function Root() {
  return (
    <main>
      <SearchBar />
      <Outlet />
    </main>
  );
}

export default Root;
