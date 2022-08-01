import DotLoader from 'react-spinners/DotLoader';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.LoaderBox}>
      <DotLoader color="#52baee" />
    </div>
  );
};

export default Loader;
