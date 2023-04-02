import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardItem from './CardItem';
import { genres, types } from 'types/types';

const music = {
  imgUrl: 'default-cover.jpg',
  title: 'Example Album',
  singerName: 'Example Artist',
  releaseDate: new Date('2005/05/10'),
  id: '1234',
  type: types.artist,
  musicGenres: [genres.rock],
  country: 'USA',
};

test('CardItem component', async () => {
  render(<CardItem music={music} />);
  const image = screen.getByAltText('album cover');
  const title = screen.getByText(/Example Album/i);
  const artist = screen.getByText(/Artist: Example Artist/i);
  const year = screen.getByText(/2005/i);

  expect(image).toHaveAttribute('src', 'default-cover.jpg');
  expect(title).toBeInTheDocument();
  expect(artist).toBeInTheDocument();
  expect(year).toBeInTheDocument();
});
