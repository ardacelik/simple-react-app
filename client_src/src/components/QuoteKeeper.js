import React, { Component } from "react";
import axios from "axios";
import QuoteItem from "./QuoteItem";

class QuoteKeeper extends Component {
  constructor() {
    super();
    this.state = {
      quotes: []
    };
  }

  componentWillMount() {
    this.getQuotes();
  }

  getQuotes() {
    axios
      .get("http://localhost:3000/api/quote-keepers")
      .then(response => {
        this.setState({ quotes: response.data }, () => {});
      })
      .catch(err => console.log(err));
  }

  render() {
    const quoteItems = this.state.quotes.map((quote, i) => {
      return <QuoteItem key={quote.id} item={quote} />;
    });
    return (
      <div>
        <h1>Quotes</h1>
        <ul className="list-group">{quoteItems}</ul>
      </div>
    );
  }
}

export default QuoteKeeper;
