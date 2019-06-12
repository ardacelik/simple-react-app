import React from "react";
import ReactDOM from "react-dom";
import CardComponent from "./CardComponent";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="m-3 text-center">Quote Keeper</h1>
        <div className="row justify-content-center">
          <CardComponent />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
