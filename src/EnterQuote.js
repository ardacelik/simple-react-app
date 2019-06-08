import React from "react";

class EnterQuote extends React.Component {
  render() {
    return (
      <div className="input-group">
        <textarea
          className="form-control m-3"
          aria-label="With textarea"
          placeholder="Enter your quote here..."
        />
      </div>
    );
  }
}

export default EnterQuote;
