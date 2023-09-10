import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App.jsx";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/root1">
          <App />
        </Route>
        <Route path="/root2">
          <AnotherComponent />
        </Route>
        {/* Add more routes for other components as needed */}
      </Switch>
    </Router>
  );
}

export default AppRouter;
