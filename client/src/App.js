import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBooks from './pages/searchbooks'
import SavedBooks from './pages/savedbooks'
import NoMatch from "./pages/NoMatch";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/searchbooks" component={SearchBooks} />
          <Route exact path="/savedbooks/" component={SavedBooks} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
