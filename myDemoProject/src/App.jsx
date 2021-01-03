import React from "react";
import Home from "./Home/Homepage";
import InfoCity from "./InfoforCity/InfoCity";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import "./appcss.css";

export default function App() {
  return (
    <Router>

        <Switch>
          <Route path="/weatherInTheCity">
            <CityWeather />
          </Route>
          <Route path="/">
            <Homes />
          </Route>
        </Switch>
      
    </Router>
  );
}

function Homes() {
  return <Home/>;
}

function CityWeather() {
  return <InfoCity/>;
}
