import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar/AppBar.jsx";
import "./Root.css";

function Root() {
  return (
    <main>
      <AppBar />
      <Outlet />
    </main>
  );
}

export default Root;
