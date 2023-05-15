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
  useMediaQuery,
} from "@material-ui/core";
import ItemDetailPopup from "./ItemDetailPopup";

const Item = ({ item }) => {
  const [selected, setSelected] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleCardClick = (event) => {
    setSelected(!selected);
    setAnchorEl(event.currentTarget);
  };

  return (
    <Card
      sx={{
        backgroundColor: selected ? "#eee" : "initial",
        cursor: "pointer",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
      }}
      onClick={handleCardClick}
    >
      <CardActionArea sx={{ flexGrow: 1 }}>
        <CardMedia component="img" image={item.exImage.url} alt={item.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Box display="flex" alignItems="center" mt={1}>
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{ whiteSpace: "nowrap" }}
            >
              {item.price}円
            </Typography>
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{ whiteSpace: "nowrap", marginLeft: 1 }}
            >
              {item.inStock ? " 在庫あり" : " 在庫なし"}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>

      <Box sx={{ alignSelf: "flex-end", m: 1 }}>
        <Button
          variant="contained"
          color="primary"
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          ショップへ
        </Button>
      </Box>

      <ItemDetailPopup item={item} open={selected} anchorEl={anchorEl} />
    </Card>
  );
};

export default Item;
