import { FC, useState } from 'react';
import musicData from 'musicData';
import { Music } from 'types/types';
import CardList from 'components/CardList/CardList';
import SearchBar from 'components/SearchBar/SearchBar';

const Home: FC = () => {
  const [musicList] = useState<Music[]>(musicData);

  return (
    <div>
      <SearchBar />
      <CardList cards={musicList} />
    </div>
  );
};

export default Home;
