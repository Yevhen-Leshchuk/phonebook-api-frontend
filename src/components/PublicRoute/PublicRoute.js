import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useLogInMutation } from 'redux/auth/authSlice';

const PublicRoute = ({ children, restricted = false, redirectTo = '/' }) => {
  const [logIn, { isSuccess: isLogging }] = useLogInMutation({
    fixedCacheKey: 'shared-logIn',
  });
  const loginedRedirect = isLogging && restricted;
  return (
    <>
      {loginedRedirect ? <Navigate to={redirectTo} replace={true} /> : children}
    </>
  );
};

PublicRoute.propTypes = {
  children: PropTypes.node,
  redirectTo: PropTypes.string,
  restricted: PropTypes.bool,
};

export default PublicRoute;
