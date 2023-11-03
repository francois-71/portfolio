import React from "react";
import { Link } from "react-router-dom";
import "./notfound.css";

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/about">Go back to the home page</Link>
    </div>
  );
};

export default NotFoundPage;
