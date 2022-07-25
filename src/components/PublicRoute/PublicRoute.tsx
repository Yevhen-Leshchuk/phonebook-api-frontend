import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLogged } from '../../redux/auth/userDataSelectors';

interface Props {
  children?: JSX.Element;
  restricted?: boolean;
  redirectTo?: string;
}

const PublicRoute = ({
  children,
  restricted = false,
  redirectTo = '/',
}: Props) => {
  const isLogged = useSelector(getIsLogged);

  const loginedRedirect = isLogged && restricted;

  return (
    <>
      {loginedRedirect ? <Navigate to={redirectTo} replace={true} /> : children}
    </>
  );
};

export default PublicRoute;
