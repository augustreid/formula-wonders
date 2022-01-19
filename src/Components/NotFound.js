import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <h2>404 Page Not Found</h2>
      <h3>Uh oh, looks like you took a wrong turn!</h3>
      <Link to={"/"}>
        <h3>⬅ Back to the Pit Lane</h3>
      </Link>
    </section>
  )
}

export default NotFound;