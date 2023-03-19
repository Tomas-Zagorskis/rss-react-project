import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardList from './CardList';
import { Music } from 'types/types';

const music1: Music = {
  imgUrl: 'https://example.com/album-cover-1.jpg',
  title: 'Example Album 1',
  artist: 'Example Artist 1',
  year: 2022,
  id: '1234',
};

const music2: Music = {
  imgUrl: 'https://example.com/album-cover-2.jpg',
  title: 'Example Album 2',
  artist: 'Example Artist 2',
  year: 2023,
  id: '5678',
};

const cards = [music1, music2];

test('CardList component', async () => {
  render(<CardList cards={cards} />);
  const list = screen.getByRole('list');
  const items = screen.getAllByRole('listitem');

  expect(list).toBeInTheDocument();
  expect(items).toHaveLength(2);
});
