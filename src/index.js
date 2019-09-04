import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import 'semantic-ui-css/semantic.min.css';

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import DropDown from './components/DropDown';

import "./styles.scss";
import { useLocalStorage } from "./hooks/useLocalStorage";

const App = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
      )
      .then(res => setCoinData(res.data))
      .catch(err => console.log(err));
  }, []);



  return (
    <div className="App">
      <Navbar />
      <DropDown/>
      <Charts coinData={coinData} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
