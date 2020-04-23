import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h2>PAGE NOT FOUND</h2>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </div>
  );
}

export default NotFound;
