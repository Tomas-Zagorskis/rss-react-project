import { render, screen } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { Genres, Types } from 'types/types';
import CardList from './CardList';

const mockStore = configureStore([]);

describe('CardList', () => {
  it('renders a list of cards', () => {
    const musicList = [
      {
        imgUrl: 'default-cover1.jpg',
        title: 'Example Album',
        singerName: 'Example Artist',
        releaseDate: new Date('2005/05/10'),
        id: '1234',
        type: Types.artist,
        musicGenres: [Genres.rock],
        country: 'USA',
      },
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
    const store = mockStore({ music: { musicList } });

    render(
      <Provider store={store}>
        <CardList />
      </Provider>
    );

    const cards = screen.getAllByRole('listitem');
    expect(cards).toHaveLength(2);
  });

  it('does not render anything when there are no cards', () => {
    const store = mockStore({ music: { musicList: [] } });

    render(
      <Provider store={store}>
        <CardList />
      </Provider>
    );

    const cards = screen.queryAllByRole('listitem');
    expect(cards).toHaveLength(0);
  });
});
