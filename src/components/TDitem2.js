import React, { useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

// import axios from "axios"

const TDitem2 = () => {
  const updateReducer = useSelector(
    (state) => state.updateReducer.updateCrypto
  );
  const selectStatus = useSelector((state) => state.statusReducer.selectStatus);
  const currencyPicked = useSelector(
    (state) => state.selectReducer.selectedCurrency
  );
  let [priceColor, setPriceColor] = useState("");
  let [percentColor, setPercentColor] = useState("");
  let [currency, setCurrency] = useState("");

  const coloringPercent = {
    color: percentColor,
    // textShadow: "0.5px 0.5px 0.5px black"
  };
  const coloringPrice = {
    color: priceColor,
    // textShadow: "0.5px 0.5px 0.5px black"
  };
  console.log(updateReducer);

  const assignColors = () => {
    //percent
    if (updateReducer.price_change_percentage_24h > 0) {
      setPercentColor("green");
    } else if (updateReducer.price_change_percentage_24h < 0) {
      setPercentColor("red");
    }
    //price
    if (updateReducer.price_change_24h > 0) {
      setPriceColor("green");
    } else if (updateReducer.price_change_24h < 0) {
      setPriceColor("red");
    }
    if (currencyPicked === "usd") {
      setCurrency("$");
    } else if (currencyPicked === "ngn") {
      setCurrency("N");
    }
  };

  useMemo(() => {
    assignColors();
  }, [updateReducer]);

  console.log(updateReducer);
  const showPriceDisplay = (
    <section>
      <h2>24 hours change</h2>
      <div className="percentDiv" style={coloringPercent}>
        <p className="percentageChange">
          {!updateReducer.price_change_percentage_24h
            ? updateReducer.price_change_percentage_24h
            : updateReducer.price_change_percentage_24h.toFixed(2)}
          %
        </p>
      </div>
      <div className="priceDiv" style={coloringPrice}>
        <p className="priceChange">
          {currency}{" "}
          {updateReducer.price_change_24h
            ? updateReducer.price_change_24h.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            : null}
        </p>
      </div>
    </section>
  );

  return <>{selectStatus ? showPriceDisplay : null}</>;
};

export default TDitem2;
