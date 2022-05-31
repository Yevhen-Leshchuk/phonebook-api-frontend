import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getIsLogged } from 'redux/auth/userDataSelectors';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const isLogged = useSelector(getIsLogged);

  return isLogged ? children : <Navigate to={redirectTo} replace={true} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
  redirectTo: PropTypes.string,
};

export default PrivateRoute;
