import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import React from "react";

export default function Rightbar() {
  return (
    <Box
      flex={2}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box position="fixed">
        <Typography variant="h6" fontWeight={100}  >Online Friends </Typography>
        <AvatarGroup max={7} >
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
          <Avatar />
        </AvatarGroup>
      </Box>
    </Box>
  );
}
