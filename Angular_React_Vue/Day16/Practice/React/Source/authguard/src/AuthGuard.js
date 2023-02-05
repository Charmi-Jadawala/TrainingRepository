import React from 'react'
import { Navigate } from 'react-router-dom'

export default function AuthGuard({ children }) {
  if(!localStorage.getItem("user")) {
      return <Navigate to="/login" replace></Navigate>;
  }
  return children;
}
