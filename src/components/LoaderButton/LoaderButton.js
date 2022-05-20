import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>
      <RotatingLines strokeColor="#204454" width={30} height={30} />
    </div>
  );
};

export default Loader;
