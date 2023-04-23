import React, { useState, useEffect } from "react";
import { Link, Typography } from "@material-ui/core";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // eslint-disable-next-line no-undef
      const appid = process.env.REACT_APP_YAHOO_APPID;
      const lowestPrice = "0";
      const highestPrice = "100000";
      const itemName = "イヤホン";
      const url = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${appid}&price_from=${lowestPrice}&price_to=${highestPrice}&query=${itemName}&results=100`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setItems(data.hits);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Yahoo!ショッピングの商品検索結果</h1>
      <ul>
        {items.map((item) => (
          <li key={item.code}>
            <Typography variant="h5">{item.name}</Typography>
            <Typography variant="body1">{item.description}</Typography>
            <Typography variant="body1">{item.price}円</Typography>
            <Typography variant="body1">JANコード: {item.janCode}</Typography>
            <Link href={item.url} target="_blank" rel="noopener noreferrer">
              商品ページを開く
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
