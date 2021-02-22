import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchDictionaries } from '../store/dictionariesSlice';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import DictionariesTablePublic from '../components/DictionariesTablePublic';

const useStyles = makeStyles((theme) => ({
  error: {
    color: theme.palette.error.main,
  },
}));

const Homepage = () => {
  const dispatch = useDispatch();
  const { dictionaries, isDictionariesLoading, error } = useSelector((state) => state.dictionaries);

  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchDictionaries());
  }, [dispatch]);

  if (error) {
    return <div className={classes.error}>error</div>;
  }

  return <>{isDictionariesLoading ? <CircularProgress /> : <DictionariesTablePublic dictionaries={dictionaries} />}</>;
};

export default Homepage;
