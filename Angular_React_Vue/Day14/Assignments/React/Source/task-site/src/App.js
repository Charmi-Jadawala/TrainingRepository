import './App.css';
import { NavLink, Outlet } from 'react-router-dom'

function App() {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                <span class="navbar-brand">Tutorial Site</span>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-primary nav-link" : "text-white nav-link"}>HOME</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/html" className={({ isActive }) => isActive ? "text-primary nav-link" : "text-white nav-link"}>HTML</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/css" className={({ isActive }) => isActive ? "text-primary nav-link" : "text-white nav-link"}>CSS</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/javascript" className={({ isActive }) => isActive ? "text-primary nav-link" : "text-white nav-link"}>JAVASCRIPT</NavLink>
                    </li>
                </ul>
                </div>
            </nav>
            <div className='container-fluid'>
                <Outlet />
            </div>
        </div>
    );
}

export default App;
