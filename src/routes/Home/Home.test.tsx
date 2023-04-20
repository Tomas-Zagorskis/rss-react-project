import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import Home from './Home';

describe('Home', () => {
  it('should render loading state when fetching data', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render error message when request fails', async () => {
    const { container } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    await waitFor(() => {
      expect(container.querySelector('ul')).not.toBeInTheDocument();
    });
  });
});
