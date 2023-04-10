import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
  it('should render the component without errors', () => {
    render(<Home />);
    const searchBar = screen.getByRole('searchbox');
    const loading = screen.getByRole('heading');

    expect(searchBar).toBeInTheDocument();
    expect(loading).toBeInTheDocument();
  });
});
