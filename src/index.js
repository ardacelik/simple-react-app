import React from "react";
import ReactDOM from "react-dom";
import CardComponent from "./CardComponent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllQuotes from "./AllQuotes";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/edit-quote" exact component={CardComponent} />
          <Route path="/" exact component={AllQuotes} />
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
