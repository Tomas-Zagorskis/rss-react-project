import { render, screen } from '@testing-library/react';
import { test } from 'vitest';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Genres, Types } from 'types/types';
import MusicForm from './MusicForm';

const mockedStore = configureStore([]);

test('renders a form and a card list', async () => {
  const musicList = [
    {
      imgUrl: 'default-cover2.jpg',
      title: 'Example Album',
      singerName: 'Example Artist',
      releaseDate: new Date('2005/05/10'),
      id: '5678',
      type: Types.artist,
      musicGenres: [Genres.rock],
      country: 'USA',
    },
  ];

  const { container } = render(
    <Provider store={mockedStore({ music: { musicList } })}>
      <MusicForm />
    </Provider>
  );

  const formElement = container.querySelector('form');
  expect(formElement).toBeInTheDocument();

  const cardListElement = screen.getByRole('list');
  expect(cardListElement).toBeInTheDocument();
});
