import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { statusAction } from "../reduxEmpire/selectStatus/action";
import { updatingMe } from "../reduxEmpire/updatingCoins/action";
import { gettingHistoryData } from "../reduxEmpire/dailyHistoryData/action";
import { gettingInterval } from "../reduxEmpire/usersChoice/action";
import { gettingCurrency } from "../reduxEmpire/usersChoice/action";

import axios from "axios";

const TDitem1 = () => {
  //STATE DECLEARATIONS
  // const selectStatus = useSelector((state) => state['selectStatus']??false);
  const selectStatus = useSelector((state) => state.statusReducer.selectStatus);
  const updateReducer = useSelector(
    (state) => state.updateReducer.updateCrypto
  );
  const selectReducer = useSelector(
    (state) => state.selectReducer.selectedInterval
  );
  const dispatch = useDispatch();
  let [sCoin, setSCoin] = useState("");
  let [sInterval, setSInterval] = useState("");
  let [sCurrency, setSCurrency] = useState("");
  let [coin_name, setCoin_name] = useState("");
  let [coin_image, setCoin_Image] = useState("");
  let [coin_price, setCoin_price] = useState();
  let [coin_market_cap, setCoin_market_cap] = useState();
  let [toggleOpen, setToggleOpen] = useState(false);
  let [cryptoData, setCryptoData] = useState([]);
  let [historicData, setHistoricData] = useState([]);
  let [signState, setSignState] = useState();
  let [isLoading, setIsLoading] = useState(false);
  let [loadColor, setLoadColor] = useState("blue");
  let [loadCursor, setLoadCursor] = useState("pointer");
  let [loadStatemnt, setLoadStatement] = useState('Proceed!');

  //END OF STATE DECLEARATIONS

  const selectLayout = (
    <div className="selectionDiv">
      <select
        value={sCoin}
        onChange={(e) => setSCoin((sCoin = e.target.value))}
      >
        <option value="">Choose Coin</option>
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="binancecoin">Binance Coin</option>
        <option value="dogecoin">DogeCoin</option>
        <option value="litecoin">LiteCoin</option>
        <option value="hive">Hive</option>
        <option value="dash">Dash</option>
      </select>
      <select
        value={sInterval}
        onChange={(e) => setSInterval((sInterval = e.target.value))}
      >
        <option value="">Choose Interval</option>
        {/* <option value="1hr">1 hour</option>
        <option value="12hrs">12 hours</option> */}
        <option value="1day">24/48 hours</option>
        <option value="7days">7 days</option>
        {/* <option value="14days">14 days</option>
        <option value="30days">30 days</option> */}
      </select>
      <select
        value={sCurrency}
        onChange={(e) => setSCurrency((sCurrency = e.target.value))}
      >
        <option value="">Choose Currency</option>
        <option value="usd">USDT</option>
        <option value="ngn">NGN</option>
      </select>
    </div>
  );

  async function fetchCryptoDataApi() {
    // setLoading(true);
    await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${sCurrency}&ids=${sCoin}&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C2d%2C3d%2C7d%2C14d%2C30d`
      )
      // await axios.get("singleApi.json")
      // await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C2d%2C3d%2C7d%2C14d%2C30d")
      .then((response) => {
        // console.log(response)
        const res = response.data[0];
        // console.log(res);
        setCryptoData((cryptoData = res));
        console.log(cryptoData);
        console.log(cryptoData.current_price);
        dispatch(statusAction());
      setIsLoading(false);
        return res;
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.message);
      setIsLoading(false);
        return err.message;
      });
  }

  const dialyHistory = async () => {
    await axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${sCoin}/market_chart?vs_currency=${sCurrency}&days=30&interval=daily`
      )
      // await axios.get("history.json")
      // await axios.get("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily")
      .then((response) => {
        const data = response.data;
        setHistoricData((historicData = data));
        console.log(historicData);
        // console.log(data);
        // console.log(data.prices)
        // console.log(data.market_caps)
        // console.log(data.total_volumes)
      })
      .catch((err) => {});
  };
  const distributeApiRes = () => {
    setCoin_price(cryptoData.current_price);
    setCoin_market_cap(cryptoData.market_cap);
    setCoin_Image(cryptoData.image);
  };

  const assignSign = () => {
    if (sCurrency === "usd") {
      setSignState((signState = "$"));
    } else if (sCurrency === "ngn") {
      setSignState((signState = "N"));
    }
  };
  useMemo(() => {
    
    if(isLoading){
      setLoadCursor("progress")
      setLoadColor('green');
      setLoadStatement("Getting Data!")
    } else if(isLoading === false){
      setLoadCursor("pointer")
      setLoadColor("blue")
      setLoadStatement("Proceed!")
    }
  }, [isLoading])

  // const checkBtn = async () => {

  //   if(isLoading){
  //     setLoadColor('red');

  //   } else if(isLoading === false){
  //     setLoadColor("orange")
  //   }
  // }
  // console.log(isLoading)

  const handleClick = async () => {
    if (sCoin && sInterval && sCurrency) {
       setIsLoading(true);
        // await checkBtn()
      console.log(isLoading);
      dispatch(gettingInterval(sInterval));
      dispatch(gettingCurrency(sCurrency));
      await dialyHistory();
      await fetchCryptoDataApi();
      assignSign();
      // setIsLoading(false);
      // checkBtn()
      await dispatch(gettingHistoryData(historicData));
      distributeApiRes();
      dispatch(updatingMe(cryptoData));
      console.log(isLoading);
    } else {
      return null;
    }
  };

  const check = {
    backgroundColor: loadColor,
    cursor: loadCursor,
    // cursor:loadStatement.cursor,
  };

  const proceedBtnDisplay = (
    <button style={check} className="proceedBtn" onClick={handleClick}>
     {loadStatemnt}
    </button>
  );

  const handleToggle = () => {
    // if (!toggleOpen) {
    //   setToggleOpen(true);
    //   dispatch(statusAction());
    // } else if (toggleOpen) {
    //   setToggleOpen(false);
    // }
    window.location.reload(false);
  };

  const showTradeDetails = (
    <div className="showTradeItem1Details">
      <div className="image">
        <img src={coin_image} alt="" />
      </div>
      <h2>{sCoin}</h2>
      <div className="openSelectBtn" onClick={handleToggle}>
        back
      </div>
      <div className="additionalDataDiv">
        <div>
          <p className="price">
            Current Price:{" "}
            <span className="priceLeftSide">
              {signState} {coin_price ? coin_price.toLocaleString() : null}
            </span>
          </p>
        </div>
        <div>
          {" "}
          <p className="marketCap">
            Market Cap:{" "}
            <span className="marketCapLeftSide">
              {!coin_market_cap
                ? coin_market_cap
                : coin_market_cap.toLocaleString()}
            </span>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {!selectStatus ? selectLayout : showTradeDetails}
      {!selectStatus ? proceedBtnDisplay : null}
    </>
  );
};

export default TDitem1;
