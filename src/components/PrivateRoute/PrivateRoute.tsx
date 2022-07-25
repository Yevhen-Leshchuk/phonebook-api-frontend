import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLogged } from '../../redux/auth/userDataSelectors';

interface Props {
  children: JSX.Element;
  redirectTo: string;
}

const PrivateRoute = ({ children, redirectTo = '/' }: Props) => {
  const isLogged = useSelector(getIsLogged);

  return isLogged ? children : <Navigate to={redirectTo} replace={true} />;
};

export default PrivateRoute;
