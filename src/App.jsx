import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";

export default function App() {
  const [userID, setuserID] = useState(null);
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login setuserID={setuserID} />
        </Route>
        <Route path="/home" exact>
          <Home userID={userID} />
        </Route>
      </Switch>
    </Router>
  );
}
