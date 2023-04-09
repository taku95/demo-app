import React, { useState, useEffect } from "react";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const appid = "dj00aiZpPVFCRDBxZ2t3VFdTdSZzPWNvbnN1bWVyc2VjcmV0Jng9NmQ-";
      const lowestPrice = "0";
      const highestPrice = "100000";
      const itemName = "イヤホン";
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
  }, []);

  return (
    <div>
      <h1>Yahoo!ショッピングの商品検索結果</h1>
      <ul>
        {items.map((item) => (
          <li key={item.code}>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}円</p>
            <p>JANコード: {item.janCode}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              商品ページを開く
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
