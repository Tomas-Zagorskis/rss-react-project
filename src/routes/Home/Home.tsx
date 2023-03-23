import { Music } from 'types/types';
import CardList from '../../components/CardList/CardList';
import SearchBar from '../../components/SearchBar/SearchBar';

const musicList: Music[] = [
  {
    imgUrl:
      'https://www.udiscovermusic.com/wp-content/uploads/2017/08/Elvis-Presley-Album-Cover-820x820.jpg',
    title: 'Elvis Presley',
    artistName: 'Elvis Presley',
    artistType: 'artist',
    musicGenres: {
      rock: true,
      electronic: false,
      pop: true,
      country: false,
      hipHop: false,
      metal: false,
      rap: false,
      jazz: false,
      "R'n'B": false,
    },
    country: 'USA',
    releaseDate: new Date('1956'),
    id: 'm1',
  },
  {
    imgUrl:
      'https://www.udiscovermusic.com/wp-content/uploads/2017/08/Beatles-Sgt-Pepper-Cover-820x820.jpg',
    title: 'Sgt Pepper’s Lonely Hearts Club Band',
    artistName: 'The Beatles',
    artistType: 'band',
    musicGenres: {
      rock: true,
      electronic: false,
      pop: true,
      country: false,
      hipHop: false,
      metal: false,
      rap: false,
      jazz: false,
      "R'n'B": false,
    },
    country: 'UK',
    releaseDate: new Date('1967'),
    id: 'm2',
  },
  {
    imgUrl:
      'https://www.udiscovermusic.com/wp-content/uploads/2017/08/Pink-Floyd-Dark-Side-Of-The-Moon-820x820.jpg',
    title: 'The Dark Side Of The Moon',
    artistName: 'Pink Floyd',
    artistType: 'band',
    musicGenres: {
      rock: true,
      electronic: false,
      pop: false,
      country: false,
      hipHop: false,
      metal: false,
      rap: false,
      jazz: false,
      "R'n'B": false,
    },
    country: 'USA',
    releaseDate: new Date('1973'),
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
