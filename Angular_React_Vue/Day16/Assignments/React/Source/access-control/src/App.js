import "./App.css";
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-primary nav-link" : "nav-link"
                }
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin"
                className={({ isActive }) =>
                  isActive ? "text-primary nav-link" : "nav-link"
                }
              >
                Admin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/user"
                className={({ isActive }) =>
                  isActive ? "text-primary nav-link" : "nav-link"
                }
              >
                User
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
