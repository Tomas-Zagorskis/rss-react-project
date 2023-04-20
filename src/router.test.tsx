import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { store } from 'app/store';
import Router from 'router';

describe('Router', () => {
  it('renders About page after clicked NavLink', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Router />
        </MemoryRouter>
      </Provider>
    );

    const searchInput = screen.getByRole('searchbox');
    expect(searchInput).toBeInTheDocument();

    const aboutLink = screen.getByText('About Us');
    await userEvent.click(aboutLink);

    const header = screen.getByRole('heading', { level: 1 });
    const paragraph = screen.getByText(/We are a team of passionate music lovers/i);

    expect(header).toHaveTextContent('About Us');
    expect(paragraph).toBeInTheDocument();
  });
});
