import { Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Homepage from '../pages/Homepage';
import Admin from '../pages/Admin';
import BaseLayout from '../layouts/BaseLayout';

const Routes = () => {
  return (
    <Switch>
      <PrivateRoute
        path="/admin"
        component={() => <Admin />}
        layout={BaseLayout}
        requiredAuth={true}
      />
      <PublicRoute
        exact
        path="/"
        component={() => <Homepage />}
        layout={BaseLayout}
      />
      <PublicRoute
        path="*"
        component={() => <div>404</div>}
        layout={BaseLayout}
        requiredAuth={false}
      />
    </Switch>
  );
};

export default Routes;
