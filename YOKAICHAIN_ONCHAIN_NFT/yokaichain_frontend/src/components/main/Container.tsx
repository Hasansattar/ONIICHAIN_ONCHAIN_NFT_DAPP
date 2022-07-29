import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Overview from "../../pages/Overview";
import Mint from "../../pages/Mint";
import Gallery from "../../pages/Gallery";
import Items from "../../pages/Items";
import FAQ from "../../pages/FAQ";
import Ecosystem from "../../pages/Ecosystem";
//import Rarityboard from "../../pages/Rarityboard";
import overviewbg from "../../media/overview-bg.svg";
import bloodmoon from "../../media/bloodmoon.svg";
import overviewbg2 from "../../media/overview-bg2.svg";


const Container = () => {
  return (
    <div className="container">

     <img src={overviewbg} className="bg-illustration bottom desktop-only" alt="illustration" />
     <img src={overviewbg2} className="bg-illustration " alt="illustration" />
     <img className="bloodmoon" src={bloodmoon} alt="bloodmoon" />
      <div className="inner">
        <Switch>
          <Route exact path="/overview" component={Overview} />
          <Route exact path="/mint" component={Mint} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/ecosystem" component={Ecosystem} />
          <Route exact path="/items" component={Items} />
          <Route exact path="/FAQ" component={FAQ} />
          <Redirect path="/" to="/Overview" />
        </Switch>
      </div>
    </div>
  );
};

export default Container;
