/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
  Box,
} from "@material-ui/core";

const Item = ({ item }) => {
  const removeLineBreaks = (description) => {
    if (description) {
      return description.replace(/<br>/g, "");
    }
  };

  return (
    <Card>
      <CardActionArea>
        <CardHeader title={item.name} />
        <Box sx={{ height: 300, width: 300 }}>
          <CardMedia component="img" image={item.exImage.url} alt={item.name} />
        </Box>

        <CardContent>
          {/* <Typography variant="body1" color="textSecondary" component="div">
            {removeLineBreaks(item.description)}
          </Typography> */}
          <Typography variant="h6" color="textSecondary" component="div">
            {item.price}円
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Item;
