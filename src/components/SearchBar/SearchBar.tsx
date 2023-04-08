import { FC, useEffect, useRef, useState } from 'react';

import classes from './SearchBar.module.css';

type Props = {
  handleSearchValue: (search: string) => void;
};

const SearchBar: FC<Props> = ({ handleSearchValue }) => {
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

  const handleKeyDown = (code: string) => {
    if (code === 'Enter' || code === 'NumpadEnt') handleSearchValue(search);
  };

  return (
    <div className={classes.search}>
      <input
        type="search"
        onChange={(event) => updateSearch(event.target.value)}
        onKeyDown={(event) => handleKeyDown(event.code)}
        value={search}
        placeholder="Search"
      />
      <img src="icon_search.svg" alt="search" />
    </div>
  );
};

export default SearchBar;
