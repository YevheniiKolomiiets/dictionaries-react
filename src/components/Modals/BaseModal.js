import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
    margin: theme.spacing(0, 0, 2),
    display: 'flex',
    justifyContent: 'center',
  },
}));

const BaseModal = ({ open, handleClose, title, children }) => {
  const classes = useStyles();

  return (
    <Modal open={open} onClose={handleClose}>
      <div className={classes.paper}>
        <div className={classes.title}>{title}</div>
        {children}
      </div>
    </Modal>
  );
};

export default BaseModal;
