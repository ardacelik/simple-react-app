import React, { Component } from "react";
import { Link } from "react-router-dom";

class QuoteItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item
    };
  }

  render() {
    return (
      <li className="list-group-item">
        <Link to={`/quotes/${this.state.item.id}`}>
          {this.state.item.quote}
        </Link>
      </li>
    );
  }
}

export default QuoteItem;
