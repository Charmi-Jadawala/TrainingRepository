import React from 'react'
import { Navigate } from 'react-router-dom'

export default function UserAuth({ children }) {
    if(localStorage.getItem("user") === "user") {
        return children;
      }
      return <Navigate to="/" replace></Navigate>;
}
