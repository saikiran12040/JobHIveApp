import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { authState, loginUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Context-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      res = await res.json();
      loginUser(res.token);
    } catch (err) {
      console.log("Error found:", err);
    }
  };
  if (authState.isAuth) {
    return <Navigate to="/Applicants" />;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="email"
            />
          </label>
        </div>
        <div>
          <label>
            password
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
};
