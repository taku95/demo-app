/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import Box from "@mui/material/Box";

function App() {
  const [searchResult, setSearchResult] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const appid = process.env.REACT_APP_YAHOO_APPID;
      const lowestPrice = "0";
      const highestPrice = "100000";
      const itemName = "プロテイン";
      // const url = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${appid}&price_from=${lowestPrice}&price_to=${highestPrice}&query=${itemName}&genre_category_id=48947&image_size=76&results=10`;
      const url = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${appid}&genre_category_id=48947&image_size=600&results=100`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setSearchResult(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []); // 空の配列を渡すことで初回のみ実行される

  return (
    <div className="App">
      <Box sx={{ paddingTop: "2rem" }}>
        <Box display="flex" justifyContent="center" sx={{ width: "100%" }}>
          <Header setSearchResult={setSearchResult} />
        </Box>
        <Box display="flex" justifyContent="center">
          <Items searchResult={searchResult} />
        </Box>
      </Box>
    </div>
  );
}

export default App;
