/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Stack } from "@mui/material";
import MuiPagination from "@material-ui/lab/Pagination";
import Item from "./Item";
import Box from "@mui/material/Box";

const Items = ({ searchResult }) => {
  const items = searchResult.hits ?? [];
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 10;
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
      <Box>
        <MuiPagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Box>
      <Stack direction="column" spacing={2}>
        {displayedItems.map((item) => (
          <Item key={item.code} item={item}></Item>
        ))}
      </Stack>
    </Box>
  );
};

export default Items;
