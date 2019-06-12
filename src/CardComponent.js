import React from "react";

class CardComponent extends React.Component {
  state = {
    quote: ""
  };

  saveQuote = event => {
    console.log(this.state.quote);
  };

  render() {
    return (
      <div className="card">
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
          <button type="button" className="btn btn-info m-3">
            See All Quotes
          </button>
        </div>
      </div>
    );
  }
}

export default CardComponent;
