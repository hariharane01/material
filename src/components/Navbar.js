import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";

export default function Navbar() {
const [open, setOpen]= useState(false);

  const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  const Icons = styled("Box")(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));
  const Userbox = styled("Box")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "5px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));
  return (
    <div>
      <AppBar position="sticky">
        <StyledToolBar>
          <Typography
            variant="h6"
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            Hariharane
          </Typography>
          <Pets
            sx={{
              display: { xs: "block", sm: "none" },
            }}
          />
          <Search>
            {" "}
            <InputBase placeholder="search..." />{" "}
          </Search>
          <Icons>
            <Badge badgeContent={6} color="error">
              <Mail />
            </Badge>
            <Badge badgeContent={5} color="error ">
              <Notifications />
            </Badge>
            <Avatar sx={{ width: 30, height: 30 }} onClick={e=>setOpen(true )} />
          </Icons>
          <Userbox>
            <Avatar sx={{ width: 30, height: 30 }} onClick={e=>setOpen(true)} />
            <Typography variant="span">Hari </Typography>
          </Userbox>
        </StyledToolBar>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={e=>setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </AppBar>
    </div>
  );
}
