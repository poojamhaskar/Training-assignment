import React from "react";
import { Link } from "react-router-dom";
export default function Column() {
  return (
    <div className="Col-1">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/student">
        <li>Student</li>
      </Link>
      <Link to="/leave">
        <li>Emp-Leave-Info</li>
      </Link>

    </div>
  );
}