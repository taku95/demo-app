/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Header({ setSearchResult }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    const appid = process.env.REACT_APP_YAHOO_APPID;
    const lowestPrice = "0";
    const highestPrice = "100000";
    const itemName = searchTerm;
    // const url = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${appid}&price_from=${lowestPrice}&price_to=${highestPrice}&query=${itemName}&results=100`;
    const url = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=${appid}&query=${itemName}&genre_category_id=48947&image_size=132&results=100`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setSearchResult(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            type="text"
            placeholder="商品名"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            sx={{ marginRight: "0.5rem" }}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#fff",
              border: "2px solid #ccc",
              borderRadius: "50%",
              width: "2.5rem",
              height: "2.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SearchIcon sx={{ color: "primary" }} />
          </button>
        </Box>
      </form>
    </Box>
  );
}
