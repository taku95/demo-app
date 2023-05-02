/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
// import { Link, Typography } from "@material-ui/core";
import { Stack } from "@mui/material";
import Item from "./Item";
import Box from "@mui/material/Box";

const Items = ({ searchResult }) => {
  const items = searchResult.hits;
  console.log(searchResult);
  return (
    // <div></div>
    <Box sx={{ width: "60%" }}>
      <Stack direction="column" spacing={2}>
        {items.map((item) => (
          <Item key={item.code} item={item}></Item>
        ))}
      </Stack>
    </Box>
  );
};

export default Items;
