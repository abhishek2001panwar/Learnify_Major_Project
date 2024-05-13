import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element: Component, isAdmin, ...rest }) => {
  return (
    <Route
      {...rest}
      element={isAdmin ? <Component /> : <Navigate to="/" />}
    />
  );
};

export default ProtectedRoute;
