import React from "react";

class EnterQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }

  render() {
    return (
      <div className="input-group">
        <textarea
          className="form-control m-3 col-md"
          aria-label="With textarea"
          placeholder="Enter your quote here..."
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default EnterQuote;
