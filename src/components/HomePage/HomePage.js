import React from "react";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="bg-light p-5 rounded-lg">
      <h1>CorySight Administration</h1>
      <p>React, Redux and React Router for ultra responsive web apps</p>
      <Link to="about" className="btn btn-primary btn-lg">
        Learn More
      </Link>
    </div>
  );
}

export default HomePage;
