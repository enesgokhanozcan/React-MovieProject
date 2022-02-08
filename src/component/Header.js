import React from "react";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function Header() {
  // const [anchorElUser, setAnchorElUser] = React.useState(null);
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };
  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };
  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
              <LocalMoviesIcon sx={{ mr: 2 }} />
              <Typography variant="h6" color="inherit" noWrap>
                <Link to="/">Movie</Link>
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 0,display: { xs: "flex" },mr:2}}>
              <Typography variant="h6" color="inherit" noWrap>
                <Link to="/login">Sign in</Link>
              </Typography>
              <Typography variant="h6" color="inherit" noWrap>
                <Link to="/">/</Link>
              </Typography>
              <Typography variant="h6" color="inherit" noWrap>
                <Link to="/register">Sign Up</Link>
              </Typography>
            </Box>
            {/* <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
