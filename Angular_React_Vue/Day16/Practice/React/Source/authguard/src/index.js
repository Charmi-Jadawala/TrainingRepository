import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./routes/Home";
import About from "./routes/About";
import Protected from "./routes/Protected";
import Login from "./routes/Login";
import AuthGuard from "./AuthGuard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="protected" element={
          <AuthGuard>
            <Protected />
          </AuthGuard>
        } />
        <Route
          path="*"
          element={
            <p className="text-danger display-6 m-4 text-center">
              Oops! Page Not Found
            </p>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
