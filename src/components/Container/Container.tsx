import s from './Container.module.css';

interface Props {
  children: JSX.Element;
}

function Container({ children }: Props) {
  return <div className={s.container}>{children}</div>;
}

export default Container;
