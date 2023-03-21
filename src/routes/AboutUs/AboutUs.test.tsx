import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import AboutUs from './AboutUs';

describe('AboutUs component', () => {
  it('should render the component without errors', () => {
    render(<AboutUs />);
    const header = screen.getByRole('heading', { level: 1 });
    const paragraph = screen.getByText(/We are a team of passionate music lovers/i);

    expect(header).toHaveTextContent('About Us');
    expect(paragraph).toBeInTheDocument();
  });
});
