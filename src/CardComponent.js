import { AllQuotes } from "./AllQuotes.js";
import React from "react";
import { Link } from "react-router-dom";

class CardComponent extends React.Component {
  state = {
    quote: ""
  };

  saveQuote = event => {
    const quoteLocationOnUI = document.getElementById("quoteAppearsHere");

    console.log(quoteLocationOnUI);

    //let textnode = document.createTextNode(this.state.quote);

    //quoteLocationOnUI.appendChild(textnode);
  };

  render() {
    return (
      <div className="container">
        <h1 className="m-3 text-center">Quote Keeper</h1>
        <div className="row justify-content-center">
          <div className="card m-3">
            <div className="card-body">
              <div className="form-group">
                <textarea
                  className="form-control w-60"
                  aria-label="With textarea"
                  placeholder="Enter your quote here..."
                  onChange={e => this.setState({ quote: e.target.value })}
                  value={this.state.quote}
                />
              </div>
              <button
                type="button"
                className="btn btn-primary m-3"
                onClick={this.saveQuote}
              >
                Save Quote
              </button>
              <button type="button" className="btn btn-danger m-3">
                Delete Quote
              </button>
              <Link to="/">
                <button type="button" className="btn btn-info m-3">
                  See All Quotes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardComponent;
