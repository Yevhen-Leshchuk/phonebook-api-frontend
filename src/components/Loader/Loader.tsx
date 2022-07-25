import { Rings } from 'react-loader-spinner';
import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.LoaderBox}>
      <Rings
        ariaLabel="loading-indicator"
        color="#52baee"
        height={78}
        width={78}
      />
    </div>
  );
};

export default Loader;
