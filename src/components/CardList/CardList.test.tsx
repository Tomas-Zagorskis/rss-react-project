import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { genres, Music, types } from 'types/types';
import CardList from './CardList';

const music1: Music = {
  imgUrl: 'default-cover1.jpg',
  title: 'Example Album',
  singerName: 'Example Artist',
  releaseDate: new Date('2005/05/10'),
  id: '1234',
  type: types.artist,
  musicGenres: [genres.rock],
  country: 'USA',
};

const music2: Music = {
  imgUrl: 'default-cover2.jpg',
  title: 'Example Album',
  singerName: 'Example Artist',
  releaseDate: new Date('2005/05/10'),
  id: '5678',
  type: types.artist,
  musicGenres: [genres.rock],
  country: 'USA',
};

const cards = [music1, music2];

test('CardList component', async () => {
  render(<CardList cards={cards} />);
  const list = screen.getByRole('list');
  const items = screen.getAllByRole('listitem');

  expect(list).toBeInTheDocument();
  expect(items).toHaveLength(2);
});
