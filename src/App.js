import React from "react";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import { Box, Stack } from "@mui/material";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";

export default function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={4} justifyContent="space-evenly">
        <Sidebar />
        <Feed />
        <Rightbar/>
      </Stack>
    </Box>
  );
}
