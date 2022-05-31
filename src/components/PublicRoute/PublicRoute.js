import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getIsLogged } from 'redux/auth/userDataSelectors';

const PublicRoute = ({ children, restricted = false, redirectTo = '/' }) => {
  const isLogged = useSelector(getIsLogged);

  const loginedRedirect = isLogged && restricted;

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
