import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminAuth from './AdminAuth';
import UserAuth from './UserAuth';
import Login from './routes/Login';
import Admin from './routes/Admin';
import User from './routes/User';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Login />} />
        <Route path="admin" element={
          <AdminAuth>
            <Admin />
          </AdminAuth>
        } />
        <Route path="user" element={
          <UserAuth>
            <User />
          </UserAuth>
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
