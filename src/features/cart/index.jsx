import React from "react";
import { Route, Routes, useResolvedPath } from "react-router-dom";

Cart.propTypes = {};

function Cart(props) {
  const match = useResolvedPath("").pathname;
  console.log(match);

  return <div>cart page</div>;
}

export default Cart;
