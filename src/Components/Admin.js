import React from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <Link to="/">
        <button className="logout">Log out</button>
      </Link>
      <h1>Welcome to the page </h1>
    </div>
  );
};

export default Admin;
