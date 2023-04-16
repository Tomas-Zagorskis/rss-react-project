import { FC, useRef } from 'react';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { setSearch } from 'features/search/searchSlice';
import classes from './SearchBar.module.css';

const SearchBar: FC = () => {
  const search = useAppSelector((state) => state.search.value);
  const dispatch = useAppDispatch();
  const searchRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (code: string) => {
    if (code === 'Enter' || code === 'NumpadEnter')
      dispatch(setSearch(searchRef.current?.value.trim() || ''));
  };

  return (
    <div className={classes.search}>
      <input
        type="search"
        onKeyDown={(event) => handleKeyDown(event.code)}
        ref={searchRef}
        defaultValue={search}
        placeholder="Search"
      />
      <img src="icon_search.svg" alt="search" />
    </div>
  );
};

export default SearchBar;
