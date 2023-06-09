import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import NotFound from "./components/notFound";
import AddEditPage from "./features/photo/pages/addEdit";

// Lazy load - Code splitting
const Photo = React.lazy(() => import("./features/photo"));

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Photo />} />
            <Route path="/photos/add" element={<AddEditPage />} />
            <Route path="/photos/:photoId" element={<AddEditPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}
// this is test

// this is home page 1
//this is home page 2

export default App;
