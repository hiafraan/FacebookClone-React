import {
  Notifications,
  Chat,
  Facebook,
  Apps,
  Home,
  OndemandVideo,
  Storefront,
  Games,
  Group,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const Search = styled("div")({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "50px",
  width: "calc(60% + 1vw)",
});

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Box
          sx={{
            display: "flex",
            flex: 1,
            gap: 1,
            alignItems: "center",
          }}
        >
          <Facebook fontSize="large" />
          <Search sx={{ display: { xs: "none", xl: "block" } }}>
            <IconButton
              sx={{ "&:hover": { background: "none" }, color: "gray" }}
            >
              <SearchIcon />
            </IconButton>
            <InputBase placeholder="Search Facebook" sx={{ color: "gray" }} />
          </Search>
        </Box>
        <Icons
          sx={{
            flex: 1,
            textAlign: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <Home sx={{ fontSize: "30px" }} />
          <OndemandVideo sx={{ fontSize: "30px", color: "#7f8287" }} />
          <Storefront sx={{ fontSize: "30px", color: "#7f8287" }} />
          <Group sx={{ fontSize: "30px", color: "#7f8287" }} />
          <Games sx={{ fontSize: "30px", color: "#7f8287" }} />
        </Icons>
        <Icons
          sx={{ flex: 1, textAlign: "center", justifyContent: "flex-end" }}
        >
          <Apps />
          <Badge badgeContent={4} color="error">
            <Chat />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Typography variant="span" color="white">
            Raan
          </Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
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
  );
};

export default Navbar;
