import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PublicRoute = ({ component: Component, layout: Layout, ...rest }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Redirect to="/admin" />;
  }

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
};

export default PublicRoute;
