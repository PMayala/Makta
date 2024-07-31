/*
to do:
create components for the web app
import components for other pages
*/

import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./views/Login";
import Landing from "./views/Landing";
import Register from "./views/Register";
import AuthRoute from "./layout/AuthRoute";
import { useEffect, useContext } from "react";
import { MainContext } from "./context/AppContext";
export default function App() {
  const navigate = useNavigate();
  const { user } = useContext(MainContext);
  useEffect(() => {
    let token = localStorage.getItem("accessToken");
    if (token) {
      navigate("/dashboard/stats");
    } else {
      navigate("/");
    }
  }, [user]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/*" element={<AuthRoute />} />
      </Routes>
    </>
  );
}
