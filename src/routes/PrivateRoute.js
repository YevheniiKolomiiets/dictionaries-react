import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return (
      <Route
        {...rest}
        render={(props) => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    );
  }

  return <Redirect to="/" />;
};

export default PrivateRoute;
