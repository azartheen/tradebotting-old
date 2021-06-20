import {React, useEffect} from "react";
import Dashboard from "./Dashboard";
import Menu from "./Menu";
import "./TradePage.css";
import TradePrediction from "./TradePrediction";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function TradePage() {
  useEffect(() => {
    // alert(`Welcome to Trade Botting version 1.0`);
    // alert(`Thanks for coming`);
    // alert(`Please read the following message critically!`);
    // alert(`Crypto trading is volatile and as so, comes with a high risk. Yes, this bot will try to give the best option
    // concerning your buying and selling in short term trade. However, bare in mind that this bot is not at all
    // close to perfection and can or may sometimes fail. With that in mind, please understand we will not be held responsible for any lost of 
    // funds due to the direction of the bot. So, trade at your own risk!!! If you accept these terms, click ok to continue.`);
    // alert(`Welcome to Trade Botting by Collins Rollins. We are currently at the early stage of development so your feedbacks
    // will be much appreciated. You can contact us via e-mail collinsrollinsmail@gmail.com. Stay tunned for more
    // intresting updates coming to the site. Now, let's go make some profits!`);
    // return () => {
    //   cleanup
    // }
  }, [])
  
  return (
    <BrowserRouter>
      <div className="tradingPageBody">
        <Menu />
        <Switch>
          <Route path="/" exact component={TradePrediction} />
          <Route path="/trade-prediction" component={TradePrediction} />
          <Route path="/dashboard" exact component={Dashboard} />
        </Switch>
      </div>
    </BrowserRouter>
    // <div className="tradingPageBody">
    //   <Menu />
    //   {/* <Dashboard /> */}
    //   <TradePrediction />
    // </div>
  );
}

export default TradePage;
