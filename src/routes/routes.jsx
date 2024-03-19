import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../layout/layout";
import AlbumPage from "../pages/albumpage";
import SongPage from "../pages/songpage";
import LoginPage from "../component/login";
import Hero from "../pages/hero";
import SignUp from "../component/signup";
import SearchPage from "../component/searchPage";
import { useSelector } from "react-redux";


const MyRoutes = () => {
  const loginToggle = useSelector((state) => state.loginState);

  console.log(loginToggle, "toggle");

  const ProtectedRoute = ({ children }) => {
    if (!loginToggle) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Hero />} />
        <Route path="album" element={<AlbumPage />} />
        <Route path="song" element={<SongPage />} />
        <Route path="search" element={<SearchPage />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
