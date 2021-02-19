import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header';

const useStyles = makeStyles((theme) => ({
  page: {
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
  },
}));

const BaseLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <main className={classes.page}>{children}</main>
    </div>
  );
};

export default BaseLayout;
