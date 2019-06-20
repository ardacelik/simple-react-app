import React from "react";
import { Switch, Route } from "react-router-dom";
import QuoteKeeper from "./QuoteKeeper";
import About from "./About";
import QuoteDetails from "./QuoteDetails";
import AddQuote from "./AddQuote";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={QuoteKeeper} />
      <Route exact path="/about" component={About} />
      <Route exact path="/add" component={AddQuote} />
      <Route exact path="/quotes/:id" component={QuoteDetails} />
    </Switch>
  </main>
);

export default Main;
