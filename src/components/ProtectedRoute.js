import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ component, path, exact = false, redirect = null, }) => {
  const isAuth = localStorage.getItem("isAuth");

  return (
    <Route path={path} exact={exact}>
      {isAuth === 'true' ? component : redirect ? redirect : <Redirect to='/login' />}
    </Route>
  );
};

export default ProtectedRoute;