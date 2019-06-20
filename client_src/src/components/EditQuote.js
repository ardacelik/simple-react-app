import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class EditQuote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      quote: "",
      author: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillMount() {
    this.getQuoteDetails();
  }

  getQuoteDetails() {
    let quoteId = this.props.match.params.id;
    axios
      .get(`http://localhost:3000/api/quote-keepers/${quoteId}`)
      .then(response => {
        this.setState({
          id: response.data.id,
          quote: response.data.quote,
          author: response.data.author
        });
      })
      .catch(err => console.log(err));
  }

  editQuote(newQuote) {
    axios
      .request({
        method: "put",
        url: `http://localhost:3000/api/quote-keepers/${this.state.id}`,
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
    this.editQuote(newQuote);
    e.preventDefault();
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <h1>Edit Quote</h1>
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
              value={this.state.quote}
              onChange={this.handleInputChange}
            />
            <label htmlFor="author">Author</label>
            <input
              className="form-control"
              type="text"
              name="author"
              ref="author"
              value={this.state.author}
              onChange={this.handleInputChange}
            />
            <input
              type="submit"
              value="Save"
              className="btn btn-primary mt-2"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default EditQuote;
