import BaseModal from './BaseModal';
import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import DictionaryFormFields from '../DictionaryFormFields';
import { formatPhoneNumber } from '../../services/utils';
import { addDictionary } from '../../store/dictionariesSlice';

const useStyles = makeStyles((theme) => ({
  error: {
    color: theme.palette.error.main,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    width: 150,
  },
}));

const AddRecordModal = ({ open, handleClose }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { isLoading, addDictionaryError } = useSelector((state) => state.dictionaries);

  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [tariff, setTariff] = useState('');
  const [booked, setBooked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await dispatch(addDictionary({ phone: formatPhoneNumber(phone), city, tariff, booked }));
    if (response.meta.requestStatus === 'fulfilled') {
      handleClose();
    }
  };

  return (
    <BaseModal open={open} handleClose={handleClose} title="Add record">
      <form onSubmit={handleSubmit} className={classes.form}>
        {addDictionaryError && <p className={classes.error}>{addDictionaryError.toString()}</p>}
        <DictionaryFormFields
          data={{ phone, city, tariff, booked }}
          setData={{ setPhone, setCity, setTariff, setBooked }}
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          className={`${classes.margin} ${classes.button}`}
          disabled={isLoading}
        >
          {isLoading ? 'loading...' : 'Add record'}
        </Button>
      </form>
    </BaseModal>
  );
};

export default AddRecordModal;
