import PuffLoader from 'react-spinners/PuffLoader';
import s from './LoaderButton.module.css';

const LoaderButton = () => {
  return (
    <div className={s.LoaderBox}>
      <PuffLoader color="#52baee" size={25} />
    </div>
  );
};
export default LoaderButton;
