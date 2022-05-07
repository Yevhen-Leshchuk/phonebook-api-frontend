import { RotatingLines } from 'react-loader-spinner';
import s from './LoaderButton.module.css';

const Loader = () => {
  return (
    <div className={s.LoaderBox}>
      <RotatingLines strokeColor="#1b1b1c" width={30} height={30} />
    </div>
  );
};

export default Loader;
