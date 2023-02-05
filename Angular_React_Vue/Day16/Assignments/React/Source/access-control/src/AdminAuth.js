import React from "react";
import { Navigate } from "react-router-dom";

export default function AdminAuth({ children }) {
  if (localStorage.getItem("user") === "admin") {
    return children;
  }
  return <Navigate to="/" replace></Navigate>;
}
