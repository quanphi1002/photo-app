import React from "react";
import { Route, Routes, useResolvedPath } from "react-router-dom";

Home.propTypes = {};

function Home(props) {
  const match = useResolvedPath("").pathname;

  return <div>Home page</div>;
}

export default Home;
