    
import React from "react";
import { Route, Switch } from "react-router-dom";
import Form from "./Components/Form"
import Dashboard from "./Components/Dashboard";

export default (
  <Switch>
    {/* home */}
    <Route exact path="/" component={Dashboard} />
    {/* add */}
    <Route exact path="/form" component={Form} /> 
    {/* edit */}
    <Route path="/edit/:id" component={Form} />;
  </Switch>
);