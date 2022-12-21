import React from "react";
import { Link } from "react-router-dom";
import HexColor from "./HexColor";

const NoPage = () => {
  return (
    <div>
    <HexColor/>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NoPage;
