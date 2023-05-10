/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@material-ui/core";
import ItemDetailPopup from "./ItemDetailPopup";

const Item = ({ item }) => {
  const [selected, setSelected] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleCardClick = (event) => {
    setSelected(!selected);
    setAnchorEl(event.currentTarget);
  };

  return (
    <Card
      sx={{
        backgroundColor: selected ? "#eee" : "initial",
        cursor: "pointer",
      }}
      onClick={handleCardClick}
    >
      <CardActionArea>
        <Box
          display="flex"
          justifyContent="center"
          sx={{ height: 300, width: 300 }}
        >
          <CardMedia component="img" image={item.exImage.url} alt={item.name} />
        </Box>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
            {item.price}円
          </Typography>
        </CardContent>
      </CardActionArea>

      <ItemDetailPopup item={item} open={selected} anchorEl={anchorEl} />
    </Card>
  );
};

export default Item;
