/* eslint-disable react/prop-types */
import React from "react";
import { Link, Typography } from "@material-ui/core";
import Box from "@mui/material/Box";

const Item = ({ item }) => {
  return (
    <Box>
      <Link href={item.url} target="_blank" rel="noopener noreferrer">
        <Typography variant="h6">{item.name}</Typography>
      </Link>
      {/* <Typography variant="body1">{item.description}</Typography> */}
      <Typography variant="body1">{item.price}円</Typography>
      {/* <Typography variant="body1">JANコード: {item.janCode}</Typography> */}
    </Box>
  );
};

export default Item;
