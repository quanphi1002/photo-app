import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import NotFound from "../../components/notFound";
import MainPage from "./pages/main";
import AddEditPage from "./pages/addEdit";

Photo.propTypes = {};

function Photo(props) {
  console.log("vo day");
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Photo;
