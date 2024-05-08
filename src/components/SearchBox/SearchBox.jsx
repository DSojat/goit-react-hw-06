import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchId = useId();

  const handleFilter = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <div className={css.searchBox}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        className={css.searchField}
        type="text"
        onChange={handleFilter}
        id={searchId}
      />
    </div>
  );
};

export default SearchBox;
