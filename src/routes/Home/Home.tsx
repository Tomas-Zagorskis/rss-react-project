import { FC, useState } from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import PhotoList from 'components/PhotoList/PhotoList';

const Home: FC = () => {
  const [query, setQuery] = useState<string>(localStorage.getItem('search')?.trim() || 'cat');

  return (
    <div>
      <SearchBar handleSearchValue={setQuery} />
      <PhotoList query={query} />
    </div>
  );
};

export default Home;
