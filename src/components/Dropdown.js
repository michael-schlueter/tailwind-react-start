import React from "react";
import { Link } from "react-router-dom";

export const Dropdown = () => {
  return (
    <div className="">
      <Link to="/" className="p-4">
        Home
      </Link>
      <Link to="/about" className="p-4">
        About
      </Link>
      <Link to="/menu" className="p-4">
        Menu
      </Link>
      <Link to="/contact" className="p-4">
        Menu
      </Link>
    </div>
  );
};
