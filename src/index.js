import React from "react";
import ReactDOM from "react-dom";
import EnterQuote from "./EnterQuote";
import SaveQuoteButton from "./SaveQuoteButton";
import DeleteQuoteButton from "./DeleteQuoteButton";
import SeeAllQuotesButton from "./SeeAllQuotesButton";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="m-3 text-center">Quote Keeper</h1>
        <div className="row justify-content-center">
          <EnterQuote />
          <SaveQuoteButton />
          <DeleteQuoteButton />
          <SeeAllQuotesButton />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
