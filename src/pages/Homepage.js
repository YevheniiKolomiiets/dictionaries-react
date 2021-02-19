import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchDictionaries } from '../store/dictionariesSlice';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import DictionariesTablePublic from '../components/DictionariesTablePublic';

const useStyles = makeStyles((theme) => ({
  page: {
    padding: theme.spacing(1),
  },
  error: {
    color: theme.palette.error.main,
  },
}));

const Homepage = () => {
  const dispatch = useDispatch();
  const { dictionaries, isLoading, error } = useSelector((state) => state.dictionaries);

  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchDictionaries());
  }, [dispatch]);

  if (error) {
    return <div className={classes.error}>error</div>;
  }

  return <>{isLoading ? <CircularProgress /> : <DictionariesTablePublic dictionaries={dictionaries} />}</>;
};

export default Homepage;
