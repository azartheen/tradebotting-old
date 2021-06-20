import { React, useMemo } from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const CalcSurface = (props) => {
  const updateReducer = useSelector(
    (state) => state.updateReducer.updateCrypto
  );
  const historyReducer = useSelector(
    (state) => state.historyReducer.historicDailyData
  );
  const selectReducer = useSelector(
    (state) => state.selectReducer.selectedInterval
  );

  let [delay_message, setDelay_message] = useState("");
  let [coin_price, setCoin_price] = useState();
  let [coin_market_cap, setCoin_market_cap] = useState();
  let [coin_price_change, setCoin_price_change] = useState();
  let [
    coin_price_percentage_change,
    setCoin_price_percentage_change,
  ] = useState();
  let [coin_market_cap_change, setCoin_market_cap_change] = useState();
  let [
    coin_market_cap_percentage_change,
    setCoin_market_cap_percentage_change,
  ] = useState();
  let [averagePrice1day, setAveragePrice1day] = useState();
  let [averagePrice7day, setAveragePrice7day] = useState();
  let [averagePrice14day, setAveragePrice14day] = useState();
  let [averagePrice30day, setAveragePrice30day] = useState();
  let [avgData, setAvgData] = useState();
  let [percentageRange, setPercentageRange] = useState();
  let [statement, setStatement] = useState("");

  const storeHistory = async () => {
    setCoin_price((coin_price = updateReducer.current_price));
    if (coin_price) {
      console.log("Data stored!");
    }
  };

  let assignmments = async () => {
    //average price for one day assignments
    let theAverageProcess =
      historyReducer.prices[30][1] +
      historyReducer.prices[29][1] +
      historyReducer.prices[28][1] +
      coin_price;
    theAverageProcess = theAverageProcess / 4;
    setAveragePrice1day((averagePrice1day = theAverageProcess));
    console.log(averagePrice1day);
    // console.log(historyReducer.prices[30][1])

    //average price for seven days
    let theAverageProcess7 =
      historyReducer.prices[30][1] +
      historyReducer.prices[29][1] +
      historyReducer.prices[28][1] +
      historyReducer.prices[27][1] +
      historyReducer.prices[25][1] +
      historyReducer.prices[24][1] +
      historyReducer.prices[23][1] +
      coin_price;
    theAverageProcess7 = theAverageProcess7 / 8;
    setAveragePrice7day((averagePrice7day = theAverageProcess7));
    console.log(averagePrice7day);

    // let theAverageProcess30 = ((historyReducer.prices[30][1] + historyReducer.prices[29][1] +
    //   historyReducer.prices[28][1] + historyReducer.prices[27][1] + historyReducer.prices[25][1] + historyReducer.prices[24][1] +
    //   historyReducer.prices[23][1]) + coin_price);
    //   theAverageProcess30 = theAverageProcess30 / 31;
    //   setAveragePrice30day(averagePrice30day = theAverageProcess30);
    //   console.log(averagePrice30day);

    switch (selectReducer) {
      case "1day":
        setAvgData((avgData = averagePrice1day));
        break;
      case "7days":
        setAvgData((avgData = averagePrice7day));
        break;
      default:
        break;
    }
  };
  //calculate for percentage average limit
  const pRange = async (avg) => {
    let percentRange = coin_price - avg;
    percentRange = percentRange / coin_price;
    // console.log(coin_price);
    percentRange = percentRange * 100;
    setPercentageRange((percentageRange = percentRange));
    console.log(percentageRange);
    // console.log(percentRange);
  };

  useMemo(async () => {
    await storeHistory();
    await assignmments();
    await pRange(avgData);
    statements(updateReducer.name, selectReducer, percentageRange);
  }, [historyReducer]);

  //Statemenents
  const statements = (coin, duration, percent) => {
    if (duration === "1day") {
      if (percent > 15) {
        setStatement(
          `If you had bought ${coin} early, we are sure you must have seen some preety good add up now. What are you waiting for? SELL NOW!`
        );
      } else if (percent > 13.9) {
        setStatement(
          `Hey, Sell your ${coin} now. What are you waiting for after such massive profits gathered for a day.`
        );
      } else if (percent > 10.9) {
        setStatement(
          `${coin} may fall massively when it starts going down. Take no risk and sell your coin now! Buying is not an option.`
        );
      } else if (percent > 7.8) {
        setStatement(
          `What a wonderful ride that ${coin} had taken for the day. It is a good time to sell. Please, Buying is not an option.`
        );
      } else if (percent > 6.9) {
        setStatement(`${coin} has just suggested it is part of the risky coin of the day. Our recommendations though is a strong sell. Do not attempt to buy.
          And sell only when you have maximize some profits.`);
      } else if (percent > 5.8) {
        setStatement(`Sell! Sell! Sell! Do not attempt to buy!`);
      } else if (percent > 4.9) {
        setStatement(`This is a great time to hit the sell button. Such profit for a day interval is good enough. Though, waiting can still be an option. 
          But Buying isn't even close to an option.`);
      } else if (percent > 3.8) {
        setStatement(`We are sure you have bought your ${coin} before now. Please do not buy if you haven't done so. The market is however showing a sell sign.
          If you have bought before now and the profits is now maximized, hit the sell buttons.`);
      } else if (percent > 2.9) {
        setStatement(`The ${coin} market has given a straight declearation of its movement of the day. Alaye, sell your coin. NOTE: Waitng could still be an option but we
          are not highly recommending it.`);
      } else if (percent > 1.8) {
        setStatement(`A buying can be suggested now as it seems ${coin} is about to moon. However, if you had gotten ${coin} and your market is maximized,
          proceed to sell. There is no crime though in waiting to gather more profits.`);
      } else if (percent > 0.8) {
        setStatement(`${coin} is not making prediction easy for us at the moment. We suggests you hold on for a while. However, 
          if you had bought ${coin} while the market was bearish, start getting ready to sell. (Dont sell yet!)`);
      } else if (percent === 0 || percent > 0) {
        setStatement(`The ${coin} market as of now is stagnant and cannot be easily determined. We suggest you come 
          try again later in about an hour or so.`);
      } else if (percent > -0.8) {
        setStatement(`We suggests you don't take any action now. Either you keep holding or you keep waiting on the right time to 
            buy.`);
      } else if (percent > -1.8) {
        setStatement(`The ${coin} market is starting to take an understandable direction! Please, wait a little more if you wish to buy
          NOTE: Sell your ${coin} now.`);
      } else if (percent > -2.9) {
        setStatement(`At this point, you shouldn't be holding any ${coin} you plan to trade for a day. Please wait a little more if you wish 
        to buy. Now's the time to get yourself some ${coin}.`);
      } else if (percent > -3.8) {
        setStatement(`We are sure you have sold your ${coin} before now. If not, please do not attempt to sell.
          However, this is a strong buy for you.`);
      } else if (percent > -4.9) {
        setStatement(
          `You will be doing yourself a great favour to buy at this point. DON'T SELL! DON'T SELL!`
        );
      } else if (percent > -5.8) {
        setStatement(`Buy! Buy! Buy! You should not attempt to sell.`);
      } else if (percent > -6.9) {
        setStatement(`This market is not too common. It suggests there is great risk in trading ${coin} today. However, this is a massive time
          to buy. Selling is not at all an option.`);
      } else if (percent > -7.8) {
        setStatement(
          `There is a bear market going on ${coin} today. We highly suggests you buy from the dip.`
        );
      } else if (percent > -10.9) {
        setStatement(`What a great day to buy. This coin is one of the higthly risky once but we are positive tha buying
          today will maximize lots of profits tommorrow!`);
      } else if (percent <= -13.9) {
        setStatement(`Only a fool will ignore the chance of buying cryptos now. Don't miss out on the moving train now and
          get some ${coin} `);
      } else if (percent < -15) {
        setStatement(
          `This is weird. We should have suggested a strong buy but it is starting to pose as a weird coin. Our recommendations though, buy as much as you can.`
        );
      }
    } 

    if (duration === "7days"){
        setStatement(`Sorry, the 7 days prediction for ${coin} is coming soon.`);
    }
  };

  // statements(updateReducer.name, selectReducer, percentageRange)
  return <div>{statement}</div>;
};

// export default React.memo(CalcSurface)
export default CalcSurface;
