import React from "react";
import { NavLink } from "react-router-dom";

const PkCodeHeader = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        
      <h3 className="navbar-brand text-white fs-3">
  PkCodeBase BookStore
</h3>

          {/* Navbar Toggler for Small Screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link mywhite">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link mywhite">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register" className="nav-link mywhite">
                  Register
                </NavLink>
              </li>
            </ul>
        
        </div>
      </nav>
    </header>
  );
};

export default PkCodeHeader;
