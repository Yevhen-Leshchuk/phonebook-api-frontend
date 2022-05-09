import { Rings } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.LoaderBox}>
      <Rings
        ariaLabel="loading-indicator"
        color="#c9c9c9"
        height={80}
        width={80}
      />
    </div>
  );
};

export default Loader;