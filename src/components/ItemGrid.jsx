/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import ItemDetailPopup from "./ItemDetailPopup";

const Item = ({ item, displayMode }) => {
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
        <CardMedia component="img" image={item.exImage.url} alt={item.name} />
        <CardContent>
          <Typography gutterBottom variant="body1" component="div">
            ¥{item.price}
          </Typography>
          <Box sx={{ marginTop: "auto" }}>
            <Button
              variant="contained"
              color="primary"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="body2">ショップへ</Typography>
            </Button>
          </Box>
        </CardContent>
      </CardActionArea>

      <ItemDetailPopup item={item} open={selected} anchorEl={anchorEl} />
    </Card>
  );
};

export default Item;
