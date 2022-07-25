import s from './Filter.module.css';

interface Props {
  filter: string;
  onChange: (filter: string) => void;
}

export default function Filter({ onChange, filter }: Props) {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        type="text"
        value={filter}
        placeholder="Find contacts by name"
        onChange={event => onChange(event.target.value)}
      />
    </label>
  );
}
