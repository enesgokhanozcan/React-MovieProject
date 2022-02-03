import React from 'react';
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Header() {
  return <div>
      <AppBar position="relative">
        <Toolbar>
          <LocalMoviesIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Movie
          </Typography>
        </Toolbar>
      </AppBar>
  </div>;
}