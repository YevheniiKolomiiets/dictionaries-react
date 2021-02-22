import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { fetchDictionaries } from '../store/dictionariesSlice';
import { Button, CircularProgress } from '@material-ui/core';
import DictionariesTablePrivate from '../components/DictionariesTablePrivate';
import AddRecordModal from '../components/Modals/AddRecordModal';

const useStyles = makeStyles((theme) => ({
  error: {
    color: theme.palette.error.main,
  },
  wrapper: {
    maxWidth: 1200,
    width: '100%',
  },
  right: {
    float: 'right',
  },
  margin: {
    margin: theme.spacing(0, 0, 1),
  },
}));

const Admin = () => {
  const dispatch = useDispatch();
  const { dictionaries, isDictionariesLoading, error } = useSelector((state) => state.dictionaries);

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchDictionaries());
  }, [dispatch]);

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  if (error) {
    return <div className={classes.error}>error</div>;
  }

  return (
    <>
      {isDictionariesLoading ? (
        <CircularProgress />
      ) : (
        <div className={classes.wrapper}>
          <Button
            variant="contained"
            color="primary"
            className={`${classes.margin} ${classes.right}`}
            onClick={handleModalOpen}
          >
            Add record
          </Button>
          <DictionariesTablePrivate dictionaries={dictionaries} />
        </div>
      )}
      <AddRecordModal open={open} handleClose={handleModalClose} />
    </>
  );
};

export default Admin;
