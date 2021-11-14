import { connect } from "react-redux";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../app/actions/auth";
import { history } from "../layout/App";

interface IProps {
  logout(): any;
  isAuthenticatedStore: boolean;
}

const Navbar: React.FC<IProps> = ({ logout, isAuthenticatedStore }) => {
  const logoutHandler = () => {
    logout();
  };

  const [currentPage, setCurrentPage] = useState(window.location.pathname);


  history.listen((location) => {
    setCurrentPage(location.pathname);
  });

  return (
    <header id="header-home">
      <div className="nav-container">
        <nav id="main-nav">
          <img src="../asset/img/logo.png" id="logo" />
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="nav-icon"></span>
          </label>
          <ul className="menu menu-items">
            <li>
              <Link to="/" className={currentPage === "/" ? "current" : ""}>
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/examples"
                className={currentPage.includes('example') ? "current" : ""}
              >
                EXAMPLE
              </Link>
            </li>
          </ul>
          <ul className="menu user">
            <li>
              {!isAuthenticatedStore  ? (
                <Link to="/login" className="user-icon">
                  <i className="fas fa-user"></i>&nbsp;&nbsp; Login
                </Link>
              ) : (
                <a className="user-icon" onClick={() => logoutHandler()}>
                  <i className="fas fa-power-off"></i>&nbsp;&nbsp; Logout
                </a>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const mapStateToProps = (state: any) => ({
  isAuthenticatedStore: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
