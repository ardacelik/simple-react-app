import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class AddQuote extends Component {
  addQuote(newQuote) {
    axios
      .request({
        method: "post",
        url: "http://localhost:3000/api/quote-keepers",
        data: newQuote
      })
      .then(response => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  }

  onSubmit(e) {
    const newQuote = {
      quote: this.refs.quote.value,
      author: this.refs.author.value
    };
    this.addQuote(newQuote);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Add Quote</h1>
        <br />
        <Link to="/" className="btn btn-info">
          Back
        </Link>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="quote">Quote</label>
            <input
              className="form-control"
              type="text"
              name="quote"
              ref="quote"
            />
            <label htmlFor="author">Author</label>
            <input
              className="form-control"
              type="text"
              name="author"
              ref="author"
            />
            <button type="submit" className="btn btn-primary mt-2">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddQuote;
