import { Music } from 'types/types';
import CardList from '../components/CardList/CardList';
import SearchBar from '../components/SearchBar';

const musicList: Music[] = [
  {
    imgUrl:
      'https://www.udiscovermusic.com/wp-content/uploads/2017/08/Elvis-Presley-Album-Cover-820x820.jpg',
    title: 'Elvis Presley',
    artist: 'Elvis Presley',
    year: 1956,
    id: 'm1',
  },
  {
    imgUrl:
      'https://www.udiscovermusic.com/wp-content/uploads/2017/08/Beatles-Sgt-Pepper-Cover-820x820.jpg',
    title: 'Sgt Pepper’s Lonely Hearts Club Band',
    artist: 'The Beatles',
    year: 1967,
    id: 'm2',
  },
  {
    imgUrl:
      'https://www.udiscovermusic.com/wp-content/uploads/2017/08/Pink-Floyd-Dark-Side-Of-The-Moon-820x820.jpg',
    title: 'The Dark Side Of The Moon',
    artist: 'Pink Floyd',
    year: 1973,
    id: 'm3',
  },
];

function Home() {
  return (
    <div>
      <SearchBar />
      <CardList cards={musicList} />
    </div>
  );
}

export default Home;
