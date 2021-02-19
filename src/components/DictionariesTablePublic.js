import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    maxWidth: 1200,
  },
});

function DictionariesTablePublic({ dictionaries }) {
  const classes = useStyles();

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Phone</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Tariff</TableCell>
            <TableCell align="right">Booked</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dictionaries.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.phone}
              </TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.tariff}</TableCell>
              <TableCell align="right">{String(row.booked)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DictionariesTablePublic;
