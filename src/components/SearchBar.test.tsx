import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  it('should update search input on change', async () => {
    render(<SearchBar />);
    const searchInput = screen.getByRole('searchbox');
    await userEvent.type(searchInput, 'test search');
    expect(searchInput).toHaveValue('test search');
  });

  it('should save search input to local storage on unmount', async () => {
    localStorage.clear();
    const { unmount } = render(<SearchBar />);
    const searchInput = screen.getByRole('searchbox');
    await userEvent.type(searchInput, 'test search');
    expect(localStorage.getItem('search')).toBe(null);
    // Unmount the component to trigger `componentWillUnmount`
    unmount();
    expect(localStorage.getItem('search')).toBe('test search');
  });

  it('should load saved search input from local storage on mount', () => {
    localStorage.setItem('search', 'saved search');
    render(<SearchBar />);
    expect(screen.getByRole('searchbox')).toHaveValue('saved search');
    localStorage.clear();
  });
});
