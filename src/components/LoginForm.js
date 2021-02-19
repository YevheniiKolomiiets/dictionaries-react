import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormControl, Input } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { doLogin } from '../store/authSlice';

const useStyles = makeStyles((theme) => ({
  error: {
    color: theme.palette.error.main,
    alignSelf: 'flex-end',
    marginBottom: theme.spacing(1),
  },
  form: {
    display: 'flex',
    alignItems: 'center',
  },
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    width: 150,
  },
}));

function LoginForm(props) {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector((state) => state.auth);

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyles();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(doLogin({ login, password }));
  };

  return (
    <form onSubmit={handleLogin} className={classes.form}>
      {error && <p className={classes.error}>{error.toString()}</p>}
      <FormControl className={classes.margin}>
        <Input value={login} onChange={(e) => setLogin(e.target.value)} placeholder="login" />
      </FormControl>
      <FormControl className={classes.margin}>
        <Input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" type="password" />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        className={`${classes.margin} ${classes.button}`}
        disabled={isLoading}
      >
        {isLoading ? 'loading...' : 'Login'}
      </Button>
    </form>
  );
}

export default LoginForm;
