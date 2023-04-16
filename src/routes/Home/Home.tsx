import { FC, useState } from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import PhotoList from 'components/PhotoList/PhotoList';

const Home: FC = () => {
  return (
    <div>
      <SearchBar />
      <PhotoList />
    </div>
  );
};

export default Home;
