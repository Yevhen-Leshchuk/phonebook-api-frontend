interface Props {
  children: JSX.Element;
}

const Section = ({ children }: Props) => {
  return <section>{children}</section>;
};

export default Section;
