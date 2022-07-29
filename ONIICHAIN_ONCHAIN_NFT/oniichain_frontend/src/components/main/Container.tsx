import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Overview from "../../pages/Overview";
import Mint from "../../pages/Mint";
import Gallery from "../../pages/Gallery";
import Items from "../../pages/Items";

const Container = () => {
  return (
    <div className="container">
      <div className="inner">
        <Switch>
          <Route exact path="/overview" component={Overview} />
          <Route exact path="/mint" component={Mint} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/items" component={Items} />
          <Redirect path="/" to="/overview" />
        </Switch>
      </div>
    </div>
  );
};

export default Container;
