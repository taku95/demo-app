/* eslint-disable react/prop-types */
import React from "react";
// import { Link, Typography } from "@material-ui/core";
import { Stack } from "@mui/material";
import Item from "./Item";
import Box from "@mui/material/Box";

const Items = ({ items }) => {
  return (
    <Box sx={{ width: "60%" }}>
      <h1></h1>
      <Stack direction="column" spacing={2}>
        {items.map((item) => (
          <Item key={item.code} item={item}></Item>
        ))}
      </Stack>
    </Box>
  );
};

export default Items;
