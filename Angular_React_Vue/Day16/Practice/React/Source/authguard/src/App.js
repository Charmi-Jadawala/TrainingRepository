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
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-primary nav-link" : "nav-link"
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-primary nav-link" : "nav-link"
                }
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/protected"
                className={({ isActive }) =>
                  isActive ? "text-primary nav-link" : "nav-link"
                }
              >
                Protected
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
