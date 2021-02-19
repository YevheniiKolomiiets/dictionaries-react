import React from 'react';
import LoginForm from './LoginForm';
import { makeStyles } from '@material-ui/core/styles';
import useAuth from '../hooks/useAuth';
import { Button } from '@material-ui/core';
import UserInfo from './UserInfo';
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.grey['200'],
  },
  margin: {
    marginLeft: theme.spacing(1),
  },
}));

function Header(props) {
  const classes = useStyles();
  const { isLoggedIn } = useAuth();
  const dispatch = useDispatch();

  const doLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={classes.header}>
      {isLoggedIn ? (
        <>
          <UserInfo />
          <Button variant="outlined" className={classes.margin} onClick={doLogout}>
            Logout
          </Button>
        </>
      ) : (
        <LoginForm />
      )}
    </header>
  );
}

export default Header;
