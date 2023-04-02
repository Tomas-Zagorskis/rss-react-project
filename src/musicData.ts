import { Music, Genres, Types } from './types/types';

const musicData: Music[] = [
  {
    imgUrl:
      'https://www.udiscovermusic.com/wp-content/uploads/2017/08/Elvis-Presley-Album-Cover-820x820.jpg',
    title: 'Elvis Presley',
    singerName: 'Elvis Presley',
    type: Types.artist,
    musicGenres: [Genres.rock, Genres.pop],
    country: 'USA',
    releaseDate: new Date('1956'),
    id: 'm1',
  },
  {
    imgUrl:
      'https://www.udiscovermusic.com/wp-content/uploads/2017/08/Beatles-Sgt-Pepper-Cover-820x820.jpg',
    title: 'Sgt Pepper’s Lonely Hearts Club Band',
    singerName: 'The Beatles',
    type: Types.band,
    musicGenres: [Genres.rock, Genres.pop],
    country: 'UK',
    releaseDate: new Date('1967'),
    id: 'm2',
  },
  {
    imgUrl:
      'https://www.udiscovermusic.com/wp-content/uploads/2017/08/Pink-Floyd-Dark-Side-Of-The-Moon-820x820.jpg',
    title: 'The Dark Side Of The Moon',
    singerName: 'Pink Floyd',
    type: Types.band,
    musicGenres: [Genres.rock],
    country: 'USA',
    releaseDate: new Date('1973'),
    id: 'm3',
  },
];

export default musicData;
