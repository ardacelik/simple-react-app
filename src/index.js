import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="row align-items-center">
            <h1 className="">Hello World!</h1>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
