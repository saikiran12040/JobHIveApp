import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="content">
        <h1>Welcome to the Job Seeker App</h1>
        <div className="links">
          <Link to="/login" className="link">
            <h3>Login Page</h3>
          </Link>
          <Link to="/Applicants" className="link">
            <h3>Applicants</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
