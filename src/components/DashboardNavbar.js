import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import {
  AppBar,
  Badge,
  Box,
  Grid,
  Hidden,
  IconButton,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import InputIcon from "@material-ui/icons/Input";
import Logo from "./Logo";

const DashboardNavbar = ({ onMobileNavOpen, onDesktopNavOpen, ...rest }) => {
  const [notifications] = useState([]);

  return (
    <AppBar elevation={0} {...rest}>
      <Toolbar className="navbar">
        <Box sx={{ flexGrow: 2 }} />
        <Hidden lgDown>
          <Grid container direction="row" alignItems="center" display="flex">
            <Grid item xs={1}>
              <IconButton color="inherit">
                <InputIcon />
              </IconButton>
              <IconButton color="inherit">
                <Badge
                  badgeContent={notifications.length}
                  color="primary"
                  variant="dot"
                >
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Grid>
            <Grid item xs={10} className="navbar-logo-container">
              <RouterLink to="/">
                <Logo />
              </RouterLink>
            </Grid>
            <Grid item xs={1} className="navbar-menu-icon">
              <IconButton color="inherit" onClick={onDesktopNavOpen}>
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden lgUp>
          <Grid container direction="row" alignItems="center" display="flex">
            <Grid item xs={10}>
              <RouterLink to="/">
                <Logo />
              </RouterLink>
            </Grid>
            <Grid item xs={2} className="navbar-menu-icon">
              <IconButton color="inherit" onClick={onMobileNavOpen}>
                <MenuIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

DashboardNavbar.propTypes = {
  onMobileNavOpen: PropTypes.func,
  onDesktopNavOpen: PropTypes.func,
};

export default DashboardNavbar;
