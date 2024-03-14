import {  DarkMode, Group, Home, Pages, Settings } from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";

export default function Sidebar() {
  return (
    <Box
      flex={1}
      p={2}
      sx={{
        display: { xs: "none", sm: "block" },
      }}
    >
      <Box position='fixed'>

      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simplle-list">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simplle-list">
            <ListItemIcon>
              <Pages />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simplle-list">
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Group" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simplle-list">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItemButton>
        </ListItem><ListItem disablePadding >
          <ListItemButton component='a' href="#simplle-list">
            <ListItemIcon>
              <DarkMode/>
            </ListItemIcon>
            <Switch/> 
          </ListItemButton>
        </ListItem>
      </List>
      </Box>
    </Box>
  );
}
