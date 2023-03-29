import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';

test('NotFound component', async () => {
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );

  const heading = screen.getByText(/404/i);
  const link = screen.getByRole('link', { name: /home/i });

  expect(heading).toBeInTheDocument();
  expect(link).toHaveAttribute('href', '/');
});
