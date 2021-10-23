import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section>
      <div className="container center">
        <h1 className="error title">404: Page not found :(</h1>
        <Link to="/">
          <button className="btn btn-primary">Home</button>
        </Link>
      </div>
    </section>
  );
};

export default Error;
