import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar";
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
