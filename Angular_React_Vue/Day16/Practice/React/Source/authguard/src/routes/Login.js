import React from "react";
import { useState } from "react";

export default function Login() {
  const [userName, setuserName] = useState("");
  const [pwd, setpwd] = useState("");

  const userLogin = () => {
      if(userName === "admin" && pwd === "password") {
        localStorage.setItem("user", userName);
      }
  };

  const userLogout = () => {
    return localStorage.removeItem("user");
  };

  return (
    <div className="text-center pt-2 pb-4 bg-light">
      <h1 className="display-5 text-primary">Login with Validation</h1>
      <div className="container mx-auto mt-4">
        <form action="">
          <label for="username" className="form-label fs-5">
            Username:{" "}
          </label>
          <input
            type="text"
            onChange={(e) => setuserName(e.target.value)}
            name="username"
            id="username"
            className="form-control-sm mx-2 text-primary mb-3"
          />
          <br />
          <label for="password" className="form-label fs-5">
            Password:
          </label>
          <input
            type="password"
            onChange={(e) => setpwd(e.target.value)}
            name="password"
            id="password"
            className="form-control-sm mx-2 text-primary mb-4"
          />
          <br />
          <button
            type="button"
            onClick={userLogin}
            className="btn btn-outline-primary ml-0 mx-2"
          >
            Login
          </button>
          <button
            type="button"
            onClick={userLogout}
            className="btn btn-outline-primary"
          >
            Logout
          </button>
        </form>
      </div>
    </div>
  );
}
