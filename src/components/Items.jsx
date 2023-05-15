/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Stack, Grid, Button } from "@mui/material";
import MuiPagination from "@material-ui/lab/Pagination";
import { List as ListIcon } from "@mui/icons-material";
import { GridOn as GridOnIcon } from "@mui/icons-material";
import Item from "./Item";
import ItemGrid from "./ItemGrid";
import Box from "@mui/material/Box";
import { useMediaQuery } from "@mui/material";

const Items = ({ searchResult }) => {
  const items = searchResult.hits ?? [];
  const [currentPage, setCurrentPage] = useState(1);
  const [displayMode, setDisplayMode] = useState("list");
  const isMobile = useMediaQuery("(max-width: 600px)");

  const handleDisplayModeChange = (mode) => {
    setDisplayMode(mode);
  };

  const ITEMS_PER_PAGE = 20;
  const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedItems = items.slice(startIndex, endIndex);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };
  return (
    <Box
      sx={{
        width: "60%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Button
          onClick={() => handleDisplayModeChange("list")}
          startIcon={<ListIcon />}
        ></Button>
        <Button
          onClick={() => handleDisplayModeChange("grid")}
          startIcon={<GridOnIcon />}
        ></Button>
      </Box>

      <Box sx={{ width: isMobile ? "100%" : "auto" }}>
        <MuiPagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          size={isMobile ? "small" : "medium"}
        />
      </Box>

      {displayMode === "list" ? (
        <Stack direction="column" spacing={2}>
          {displayedItems.map((item) => (
            <Item key={item.code} item={item}></Item>
          ))}
        </Stack>
      ) : (
        <Grid container spacing={2}>
          {displayedItems.map((item) => (
            <Grid item key={item.code} xs={6} sm={3} md={3}>
              <ItemGrid displayMode={displayMode} item={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default Items;
