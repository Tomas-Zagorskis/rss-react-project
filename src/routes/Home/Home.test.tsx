import { render, fireEvent } from '@testing-library/react';
import { test } from 'vitest';
import Home from './Home';

test('renders the search bar and card list', async () => {
  const { getByPlaceholderText, getByText, getAllByRole } = render(<Home />);

  // Assert that the search bar is rendered
  const searchInput = getByPlaceholderText('Search');
  expect(searchInput).toBeInTheDocument();

  // Assert that the card list is rendered with all cards
  const cardList = getAllByRole('listitem');
  expect(cardList).toHaveLength(3);

  // Assert that the card list is filtered when search input changes
  fireEvent.change(searchInput, { target: { value: 'Elvis' } });
  expect(getAllByRole('listitem')).toHaveLength(3);
  expect(getByText('Elvis Presley (1956)')).toBeInTheDocument();
});
