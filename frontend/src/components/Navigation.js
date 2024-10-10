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