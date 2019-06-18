import React from "react";
import { Link } from "react-router-dom";

class AllQuotes extends React.Component {
  getQ() {
    // const el = document.querySelector("#quoteAppearsHere");
    console.log("Hello");
  }

  render() {
    return (
      <div className="container">
        <h1 className="m-3 text-center">Quote Keeper</h1>
        <div className="row justify-content-center">
          <h1>HOME</h1>
          <Link to="/edit-quote">
            <button type="button" className="btn btn-info m-3">
              Enter a quote
            </button>
          </Link>
          <div id="quoteAppearsHere">Hi</div>
        </div>
      </div>
    );
  }
}

export default AllQuotes;
