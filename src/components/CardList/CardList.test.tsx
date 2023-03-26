import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Music } from 'types/types';
import CardList from './CardList';

const music1: Music = {
  imgUrl: 'default-cover1.jpg',
  title: 'Example Album',
  singerName: 'Example Artist',
  releaseDate: new Date('2005/05/10'),
  id: '1234',
  type: {
    artist: true,
    band: false,
  },
  musicGenres: {
    rock: true,
    electronic: false,
    pop: false,
    country: false,
    hipHop: false,
    metal: false,
    rap: false,
    other: false,
  },
  country: 'USA',
};

const music2: Music = {
  imgUrl: 'default-cover2.jpg',
  title: 'Example Album',
  singerName: 'Example Artist',
  releaseDate: new Date('2005/05/10'),
  id: '1234',
  type: {
    artist: true,
    band: false,
  },
  musicGenres: {
    rock: true,
    electronic: false,
    pop: false,
    country: false,
    hipHop: false,
    metal: false,
    rap: false,
    other: false,
  },
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
