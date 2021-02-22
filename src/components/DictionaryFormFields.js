import React from 'react';
import { FormControl, FormControlLabel, Input, InputLabel, MenuItem, Select, Switch } from '@material-ui/core';
import MaskedInput from 'react-text-mask';
import { makeStyles } from '@material-ui/core/styles';

const cities = ['New City', 'Megapolis', 'Riverside', 'Big Town'];
const tariffs = ['Basic', 'Express', 'Premium'];

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const TextMask = ({ inputRef, ...other }) => (
  <MaskedInput
    {...other}
    ref={(ref) => {
      inputRef(ref ? ref.inputElement : null);
    }}
    mask={['+', /[1-9]/, /\d/, '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    placeholderChar={'\u2000'}
  />
);

function DictionaryFormFields({
  data: { phone, city, tariff, booked },
  setData: { setPhone, setCity, setTariff, setBooked },
}) {
  const classes = useStyles();

  return (
    <>
      <FormControl className={classes.margin} required>
        <InputLabel htmlFor="phone">Phone</InputLabel>
        <Input
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="phone"
          inputComponent={TextMask}
        />
      </FormControl>

      <FormControl className={classes.margin} required>
        <InputLabel id="demo-controlled-open-select-label">City</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          {cities.map((city) => (
            <MenuItem value={city} key={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={classes.margin} required>
        <InputLabel id="tariff-label">Tariff</InputLabel>
        <Select labelId="tariff-label" id="tariff" value={tariff} onChange={(e) => setTariff(e.target.value)}>
          {tariffs.map((tariff) => (
            <MenuItem value={tariff} key={tariff}>
              {tariff}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControlLabel
        control={<Switch checked={booked} onChange={(e) => setBooked(e.target.checked)} name="booked" />}
        label="Booked"
      />
    </>
  );
}

export default DictionaryFormFields;
