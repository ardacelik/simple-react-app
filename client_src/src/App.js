import React from "react";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <Main />
    </div>
    <div id="read-more">
      <Link to="/add" className="btn btn-danger btn-circle btn-xl">
        <i className="fa fa-plus" />
      </Link>
    </div>
  </div>
);

export default App;
