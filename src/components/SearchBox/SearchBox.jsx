import { useId } from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import css from './SearchBox.module.css';

// const handleFilter = evt => {
//   dispatch(changeFilter(evt.target.value));
// };

const SearchBox = () => {
  const searchId = useId();
  const dispatch = useDispatch();
  return (
    <div className={css.searchBox}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        className={css.searchField}
        type="text"
        onChange={evt => dispatch(changeFilter(evt.target.value))}
        id={searchId}
      />
    </div>
  );
};

export default SearchBox;
