import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar/AppBar.jsx";
import "./Root.scss";

function Root() {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
}

export default Root;
