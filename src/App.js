import React, {useEffect} from "react";
import { Routes } from "react-router-dom";
import Loading from "./api/loading";
import {useDispatch, useSelector} from "react-redux";
import Public from "./routes/public";
import Protected from "./routes/protected";
import Private from "./routes/private";
import "./App.css";
import "./sass/style.scss"
import {getSalonLocations} from "./redux/slices/Fetch";
function App() {
  const loading = useSelector((state) => state.user.loading);
  return (
    <React.Fragment>
      <Loading active={loading} />
      <Routes>
        {/* Public Routes */}
        {Public}
        {/* Protected Routes */}
        {Protected}
        {/* Private Routes */}
        {Private}
        {/**/}
      </Routes>
    </React.Fragment>
  );
}
export default App;
