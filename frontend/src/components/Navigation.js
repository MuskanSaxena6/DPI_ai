/*
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AppBar, Toolbar, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'white',
    textDecoration: 'none',
  },
}));

const Navigation = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Button component={Link} to="/" className={classes.menuButton}>
          {t('appName')}
        </Button>
        <Button component={Link} to="/services" className={classes.menuButton}>
          {t('services')}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
*/


import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  AppBar, 
  Toolbar, 
  Button, 
  makeStyles,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme 
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'white',
    textDecoration: 'none',
  },
  title: {
    flexGrow: 1,
  },
  mobileMenu: {
    marginLeft: 'auto',
  },
  desktopMenu: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const Navigation = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button 
            component={Link} 
            to="/" 
            className={classes.menuButton}
            color="inherit"
          >
            {t('appName')}
          </Button>
          
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.mobileMenu}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem 
                  component={Link} 
                  to="/services" 
                  onClick={handleClose}
                >
                  {t('services')}
                </MenuItem>
                <MenuItem 
                  component={Link} 
                  to="/login" 
                  onClick={handleClose}
                >
                  {t('login')}
                </MenuItem>
              </Menu>
            </>
          ) : (
            <div className={classes.desktopMenu}>
              <Button 
                component={Link} 
                to="/services" 
                className={classes.menuButton}
                color="inherit"
              >
                {t('services')}
              </Button>
              <Button 
                component={Link} 
                to="/login" 
                className={classes.menuButton}
                color="inherit"
              >
                {t('login')}
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;