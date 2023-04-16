import { FC } from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import PhotoList from 'components/PhotoList/PhotoList';

const Home: FC = () => {
  return (
    <>
      <SearchBar />
      <PhotoList />
    </>
  );
};

export default Home;
