import React from 'react';
import { Navigate } from 'react-router-dom';
import { getAuthToken } from '../util/auth';

const ProtectedRoute = ({ element }) => {
  const accessToken = getAuthToken();

  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default ProtectedRoute;
