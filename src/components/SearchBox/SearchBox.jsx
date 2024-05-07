import { useId } from 'react';
import css from './SearchBox.module.css';

const SearchBox = ({ onChange }) => {
  const searchId = useId();
  return (
    <div className={css.searchBox}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        className={css.searchField}
        type="text"
        onChange={onChange}
        id={searchId}
      />
    </div>
  );
};

export default SearchBox;
