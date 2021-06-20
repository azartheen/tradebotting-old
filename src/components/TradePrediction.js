import React, { useState, useEffect, useMemo } from "react";
import "./TradePrediction.css";
// import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import TDitem1 from "./TDitem1";
import TDitem2 from "./TDitem2";
import TDitem4 from "./TDitem4";
import SignIn from "./SignIn";
function TradePrediction() {
  const loginReducer = useSelector((state) => state.loginReducer.isLoggedIn);
  const loginUsers = useSelector((state) => state.loginReducer.users);



  const items = (
    <div className="tradePredictionCointainer">
      <div className="tradeitem1">
        <TDitem1 />
      </div>
      <div className="tradeitem2">
        <TDitem2 />
      </div>
      <div className="tradeitem3">Latest News</div>
      <div className="tradeitem4">
        <TDitem4 />
      </div>
    </div>
  );
  // return !loginReducer ? <SignIn /> : items;
  return items;
}

export default TradePrediction;
