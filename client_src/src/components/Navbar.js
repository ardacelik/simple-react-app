import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <h1 className="text-white">Quote Keeper</h1>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="text-white nav-link">
                <i className="fa fa-quote-left m-1" />
                Quotes
              </Link>
            </li>
          </ul>
        </nav>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="text-white nav-link">
                  <i className="fa fa-quote-left m-1" />
                  Quotes
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/add" className="text-white nav-link">
                  <i className="fa fa-plus m-1" />
                  Add Quote
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="text-white nav-link">
                  <i className="fa fa-question-circle m-1" />
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
