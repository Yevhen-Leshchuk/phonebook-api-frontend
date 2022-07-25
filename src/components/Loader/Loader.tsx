import RiseLoader from 'react-spinners/RiseLoader';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.LoaderBox}>
      <RiseLoader color="#52baee" size={10} speedMultiplier={1} />
    </div>
  );
};

export default Loader;
