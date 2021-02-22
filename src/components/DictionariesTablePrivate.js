import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import RemoveRecordModal from './Modals/RemoveRecordModal';
import EditRecordModal from './Modals/EditRecordModal';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    maxWidth: 1200,
  },
  marginX: {
    margin: theme.spacing(0, 1),
  },
}));

function DictionariesTablePrivate({ dictionaries }) {
  const classes = useStyles();

  const [removeModalOpen, setRemoveModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [pendingId, setPendingId] = useState(null);
  const [pendingRecord, setPendingRecord] = useState(null);

  const handleRemoveButtonClick = (record) => {
    setRemoveModalOpen(true);
    setPendingId(record.id);
  };

  const handleEditButtonClick = (record) => {
    setEditModalOpen(true);
    setPendingRecord(record);
  };

  return (
    <>
      <TableContainer className={classes.tableContainer} component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Phone</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">Tariff</TableCell>
              <TableCell align="right">Booked</TableCell>
              <TableCell align="right">Actions</TableCell>
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
                <TableCell align="right">
                  <Button
                    size="small"
                    variant="outlined"
                    color="primary"
                    className={classes.marginX}
                    onClick={() => handleEditButtonClick(row)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    color="secondary"
                    className={classes.marginX}
                    onClick={() => handleRemoveButtonClick(row)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <RemoveRecordModal open={removeModalOpen} handleClose={() => setRemoveModalOpen(false)} id={pendingId} />
      <EditRecordModal open={editModalOpen} handleClose={() => setEditModalOpen(false)} record={pendingRecord} />
    </>
  );
}

export default DictionariesTablePrivate;
