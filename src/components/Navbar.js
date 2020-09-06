import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Logo from "../images/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  but: {
    display: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        style={{
          display: "flex",
          flexWrap: "wrap",
          msFlexDirection: "column",

          marginTop: 10,
          background: "transparent",
          flexDirection: "column",

          boxShadow: "none",
          color: "black",
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <img src={Logo} alt="nike" height={40} />
          <Button href="/" variant="h6">
            Nike
          </Button>

          <Button href="/launch" variant="h6" className={classes.but}>
            product
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
