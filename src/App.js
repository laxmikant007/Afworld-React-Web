import React from "react";
import "./styles.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home";
import Products from "./pages/Products";
import Reports from "./pages/Reports";
import Login from "./pages/Login";
import Register  from "./pages/Register";
import Advertisers from "./pages/Advertisers";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route  path="/login" component={Login} />
          <Route  path="/register" component={Register} />
          <Route  path="/advertisers" component={Advertisers} />

          <Route path="/products" component={Products} />
          <Route path="/reports" component={Reports} />
        </Switch>
      </Router>
    </div>
  );
}
