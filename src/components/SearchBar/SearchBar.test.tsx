import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  const mockedStore = configureStore([]);

  it('should update search input on change', async () => {
    render(
      <Provider store={mockedStore({ search: { value: '' } })}>
        <SearchBar />
      </Provider>
    );
    const searchInput = screen.getByRole('searchbox');
    await userEvent.type(searchInput, 'test search');
    expect(searchInput).toHaveValue('test search');
  });

  it('should load saved search input', () => {
    render(
      <Provider store={mockedStore({ search: { value: 'saved search' } })}>
        <SearchBar />
      </Provider>
    );
    expect(screen.getByRole('searchbox')).toHaveValue('saved search');
  });
});
