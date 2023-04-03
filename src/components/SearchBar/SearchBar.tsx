import { FC, useEffect, useRef, useState } from 'react';

import classes from './SearchBar.module.css';

const SearchBar: FC = () => {
  const [search, setSearch] = useState<string>(localStorage.getItem('search')?.trim() || '');
  const searchRef = useRef<string>(search);

  useEffect(() => {
    searchRef.current = search;
  }, [search]);

  useEffect(() => {
    return () => localStorage.setItem('search', searchRef.current);
  }, []);

  const updateSearch = (text: string) => {
    setSearch(text);
  };

  return (
    <div className={classes.search}>
      <input
        type="search"
        onChange={(event) => updateSearch(event.target.value)}
        value={search}
        placeholder="Search"
      />
      <img src="icon_search.svg" alt="search" />
    </div>
  );
};

export default SearchBar;
