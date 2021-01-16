import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import SavedBooks from "./pages/SavedBooks";



class App extends Component {


  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/saved" component={SavedBooks} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
