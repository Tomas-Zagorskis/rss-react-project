import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import CardItem from './CardItem';

const music = {
  imgUrl: 'https://example.com/album-cover.jpg',
  title: 'Example Album',
  artist: 'Example Artist',
  year: 2022,
  id: '1234',
};

test('CardItem component', async () => {
  render(<CardItem music={music} />);
  const image = screen.getByAltText('album cover');
  const title = screen.getByText(/Example Album/i);
  const artist = screen.getByText(/Artist: Example Artist/i);
  const year = screen.getByText(/2022/i);

  expect(image).toHaveAttribute('src', 'https://example.com/album-cover.jpg');
  expect(title).toBeInTheDocument();
  expect(artist).toBeInTheDocument();
  expect(year).toBeInTheDocument();
});
