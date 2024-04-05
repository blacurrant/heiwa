import React from "react";
import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Layout from "../layout/layout";
import AlbumPage from "../pages/albumpage";
import SongPage from "../pages/songpage";
import LoginPage from "../component/login";
import Hero from "../pages/hero";
import SignUp from "../component/signup";
import SearchPage from "../component/searchPage";
import Profile from "../pages/profile";
import { useSelector } from "react-redux";


const MyRoutes = () => {
  const loginToggle = useSelector((state) => state.loginState);

  const ProtectedRoute = ({ children }) => {
    if (loginToggle) {
      return children;
    }
    return <Navigate to="/login" />;
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
        <Route path="/:albumId" element={<AlbumPage />} />
        <Route path="song/:songId" element={<SongPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default MyRoutes;
