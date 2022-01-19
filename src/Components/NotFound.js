import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <h1>404 Page Not Found</h1>
      <h2>Uh oh, looks like you took a wrong turn!</h2>
      <Link to={"/"}>
        <h3>⬅ Back to the Pit Lane</h3>
      </Link>
    </section>
  )
}

export default NotFound;