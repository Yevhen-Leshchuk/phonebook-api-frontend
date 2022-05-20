import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLogInMutation } from 'redux/auth/authSlice';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const [logIn, { isSuccess: isLogging }] = useLogInMutation({
    fixedCacheKey: 'shared-logIn',
  });

  return isLogging ? children : <Navigate to={redirectTo} replace={true} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
  redirectTo: PropTypes.string,
};

export default PrivateRoute;
