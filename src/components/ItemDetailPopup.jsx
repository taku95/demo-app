/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Popover, Typography, Box } from "@material-ui/core";

const ItemDetailPopup = ({ item, open, anchorEl }) => {
  const removeLineBreaks = (description) => {
    if (description) {
      return description.replace(/<br>/g, "");
    }
  };

  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <Box sx={{ padding: 20 }}>
        <Typography>{item.name}</Typography>
        <Typography>{removeLineBreaks(item.description)}</Typography>
      </Box>
    </Popover>
  );
};

export default ItemDetailPopup;
