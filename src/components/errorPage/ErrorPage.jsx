import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="container">
      <h1>Que haces aca!</h1>
      <Link to="/">
        <button>Andate a la home</button>
      </Link>
    </div>
  );
};
