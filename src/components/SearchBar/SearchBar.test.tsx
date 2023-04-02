import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('should update search input on change', async () => {
    render(<SearchBar />);
    const searchInput = screen.getByRole('searchbox');
    await userEvent.type(searchInput, 'test search');
    expect(searchInput).toHaveValue('test search');
  });

  it('should save search input to local storage', async () => {
    localStorage.clear();
    const { unmount } = render(<SearchBar />);
    const searchInput = screen.getByRole('searchbox');
    await userEvent.type(searchInput, 'test search');

    unmount();
    expect(localStorage.getItem('search')).toBe('test search');
  });

  it('should load saved search input from local storage', () => {
    localStorage.setItem('search', 'saved search');
    render(<SearchBar />);
    expect(screen.getByRole('searchbox')).toHaveValue('saved search');
    localStorage.clear();
  });
});
