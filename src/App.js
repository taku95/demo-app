import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import Box from "@mui/material/Box";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const appid = process.env.REACT_APP_YAHOO_APPID;
      const lowestPrice = "0";
      const highestPrice = "100000";
      const itemName = "プロテイン"; // ここで初期値を指定する
      const url = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${appid}&price_from=${lowestPrice}&price_to=${highestPrice}&query=${itemName}&results=100`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setItems(data.hits);
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
          <Header setItems={setItems} />
        </Box>
        <Box display="flex" justifyContent="center">
          <Items items={items} />
        </Box>
      </Box>
      <div />
    </div>
  );
}

export default App;
