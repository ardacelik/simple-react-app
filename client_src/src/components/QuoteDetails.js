import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class QuoteDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: ""
    };
  }

  componentWillMount() {
    this.getQuote();
  }

  getQuote() {
    let quoteId = this.props.match.params.id;
    axios
      .get(`http://localhost:3000/api/quote-keepers/${quoteId}`)
      .then(response => {
        this.setState({ details: response.data }, () =>
          console.log(this.state)
        );
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <br />
        <Link to="/" className="btn btn-info">
          Back
        </Link>
        <h1>Quote</h1>
        <ul className="list-group">
          <li className="list-group-item">{this.state.details.quote}</li>
        </ul>
        <Link
          className="btn btn-primary btn-block mt-2"
          to={`/quotes/edit/${this.state.details.id}`}
        >
          Edit
        </Link>
        <button className="btn btn-danger btn-block">Delete</button>
      </div>
    );
  }
}

export default QuoteDetails;
