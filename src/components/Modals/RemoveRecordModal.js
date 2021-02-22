import BaseModal from './BaseModal';
import { Button } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { removeDictionary } from '../../store/dictionariesSlice';

const useStyles = makeStyles((theme) => ({
  error: {
    color: theme.palette.error.main,
  },
  button: {
    width: 200,
  },
}));

const RemoveRecordModal = ({ open, handleClose, id }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { isLoading, removeDictionaryError } = useSelector((state) => state.dictionaries);

  const handleRemoveConfirmation = async () => {
    const response = await dispatch(removeDictionary({ id }));
    if (response.meta.requestStatus === 'fulfilled') {
      handleClose();
    }
  };

  return (
    <BaseModal open={open} handleClose={handleClose} title="Remove record">
      {removeDictionaryError && <p className={classes.error}>{removeDictionaryError.toString()}</p>}
      <p>Do you want to remove record {id}?</p>

      <Button
        variant="contained"
        color="secondary"
        onClick={handleRemoveConfirmation}
        className={`${classes.margin} ${classes.button}`}
        disabled={isLoading}
      >
        {isLoading ? 'loading...' : 'Remove record'}
      </Button>
    </BaseModal>
  );
};

export default RemoveRecordModal;
