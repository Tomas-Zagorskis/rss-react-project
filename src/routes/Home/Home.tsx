import { musicData } from 'musicData';
import { useState } from 'react';
import { Music } from 'types/types';
import CardList from 'components/CardList/CardList';
import SearchBar from 'components/SearchBar/SearchBar';

function Home() {
  const [musicList, setMusicList] = useState<Music[]>(musicData);

  return (
    <div>
      <SearchBar />
      <CardList cards={musicList} />
    </div>
  );
}

export default Home;
