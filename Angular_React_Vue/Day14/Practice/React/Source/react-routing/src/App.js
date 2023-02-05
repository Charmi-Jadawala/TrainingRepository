import './App.css';
import { NavLink, Outlet } from "react-router-dom";


function App() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/invoices" className={({ isActive }) => isActive ? "text-primary nav-link" : "nav-link"}>Invoices</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/expenses" className={({ isActive }) => isActive ? "text-primary nav-link" : "nav-link"}>Expenses</NavLink>
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
