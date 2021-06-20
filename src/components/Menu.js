import React, { useState, useEffect } from "react";
import "./Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menuBar">
      <h2>TRADE BOTTING <p>v 1.0 <p>Beta Version</p></p></h2>
      <div className="menuArea">
        <ul>
          {/* <Link to="/dashboard">
            <div>
              <li>Dashboard</li>
            </div>
          </Link> */}
          <Link to="/trade-prediction">
            <div style={{textDecoration: 'none'}}>
              <li>Trade Prediction</li>
            </div>
          </Link>
          {/* <div>
            <li>Trade History</li>
          </div>
          <div>
            <li>Billing</li>
          </div>
          <div>
            <li>Notifications</li>
          </div>
          <div>
            <li>FAQ</li>
          </div>
          <div>
            <li>Sign Out</li>
          </div> */}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
