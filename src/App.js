import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import "@mdi/font/css/materialdesignicons.css";
import "./plugins/Axios";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainPage from "./home/Mainpage";
import PrivateRoutes from "./protected/private";
import PublicRoutes from "./protected/public";
import Navbar from "./navbar/Navbar";

//gloval varaible
global.token = localStorage.getItem("token");
let user = JSON.parse(localStorage.getItem("user")) || {};
global.username = user.userName;
global.fname = user.firstName;
global.lname = user.lastName;
global.userId = user.userId;
global._id = user._id;
global.configTaost = {
  position: "top-center",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  progress: undefined,
};
global.logOut = async () => {
  localStorage.clear("token");
  localStorage.clear("user");
  window.location.href = "/login";
};
// end global

function App() {
  const [isAuth, setAuth] = useState(localStorage.getItem("token"));
  useEffect(() => {
    let checkToken = localStorage.getItem("token");
    checkToken ? setAuth(true) : setAuth(false);
    console.log(global._id);
  }, []);
  return (
    <div className="">
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<MainPage />} />
          </Route>
          <Route element={<PublicRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route
            path="*"
            element={<Navigate to={isAuth ? "/home" : "/login"} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
