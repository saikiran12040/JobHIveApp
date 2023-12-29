import React from "react";
import Home from "./Home";
import { PrivateRoute } from "../Components/PrivateRoute";
import { SingleApplicant } from "./SingleApplicant";
import { Applicants } from "../Components/Applicants";
import { Prospects } from "./Prospects";
import { Login } from "./Login";
import { Routes, Route } from "react-router-dom";
import AuthContextProvider from "../Context/AuthContext";

export const AllRoutes = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Applicants" element={<Applicants />} />
        <Route
          path="/Applicants/:id"
          element={
            <PrivateRoute>
              <SingleApplicant />
            </PrivateRoute>
          }
        />
        <Route
          path="/Prospects"
          element={
            <PrivateRoute>
              <Prospects />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthContextProvider>
  );
};
