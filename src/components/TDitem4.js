import React from "react";
import { useState, useEffect, useMemo  } from "react";
import CalcSurface from "./CalcSurface";
import { useSelector, useDispatch} from "react-redux";
import "./TDitem4.css";
import CalDeep from "./CalDeep";
import Dashboard from "./Dashboard";
import { Link } from 'react-router-dom'

const TDitem4 = () => {
  let [displayButtons, setDisplayButtons] = useState(true);
  let [surfaceState, setSurfaceState] = useState(false);
  let [deepState, setDeepState] = useState(false);
  const historyReducer = useSelector(
    (state) => state.historyReducer.historicDailyData
  );
  // const loginReducer = useSelector(state => state.loginReducer.isLoggedIn)
  // const loginUsers = useSelector(state => state.loginReducer.users)

  const handleSurfaceClck = () => {
    setDisplayButtons(false);
    setSurfaceState(true);
  };
  // console.log(loginReducer, loginUsers)
  // const testing = () => {
  //   <Link to="/dashboard">
  //   <div>
  //     <li>Dashboard</li>
  //   </div>
  // </Link>
  // }
  // useMemo(() => {
  //   if(loginReducer === false){
  //     alert(`You are not logged in!`);
  //     if(alert){
  //       testing()
  //     }
  //   }
  // }, [])

  const handleDeepClck = () => {
    setDisplayButtons(false);
    setDeepState(true);
  };

  const buttons = (
    <>
      <button className="surface" onClick={handleSurfaceClck}>
        Surface Scan
      </button>
      <button className="deep" onClick={handleDeepClck}>
        Deep Scan
      </button>
    </>
  );
  return (
    <>
      <div className="first_item4_cointainer">
        {/* {displayButtons ? buttons : <CalcSurface buttons={displayButtons} theState={surfaceState} />  } */}
        {displayButtons ? buttons : surfaceState ? <CalcSurface buttons={displayButtons} theState={surfaceState} /> 
        : <CalDeep buttons={displayButtons} theState={deepState}  /> }
        {/* {buttons}
                <CalcSurface /> */}
                 {/* <CalDeep /> */}
               
      </div>
    </>
  );
};

export default TDitem4;
