import { test, expect } from 'vitest';
import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';
import classes from './Header.module.css';

test('Header component', async () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <Header />
    </MemoryRouter>
  );

  const homeLink = screen.getByRole('link', { name: /home/i });
  const aboutUsLink = screen.getByRole('link', { name: /about us/i });

  expect(homeLink).toBeInTheDocument();
  expect(homeLink).toHaveAttribute('href', '/');
  expect(homeLink).toHaveClass(classes.active);
  expect(aboutUsLink).toBeInTheDocument();
  expect(aboutUsLink).toHaveAttribute('href', '/about-us');
  expect(aboutUsLink).not.toHaveClass(classes.active);

  // Simulate clicking on the About Us link
  act(() => {
    aboutUsLink.click();
  });

  expect(homeLink).not.toHaveClass(classes.active);
  expect(aboutUsLink).toHaveClass(classes.active);
});
