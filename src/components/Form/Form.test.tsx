import { render, screen } from '@testing-library/react';
import { test, suite, vi } from 'vitest';
import Form from './Form';

suite('Form Component', () => {
  const handleSubmitMock = vi.fn();
  const defaultProps = {
    onSubmit: handleSubmitMock,
  };

  beforeEach(() => {
    handleSubmitMock.mockClear();
  });

  test('renders the form correctly', () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    render(<Form {...defaultProps} />);

    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/singer/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/country\*:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/release date/i)).toBeInTheDocument();
    expect(screen.getByText(/artist or band/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/artist/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/band/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/upload image/i)).toBeInTheDocument();
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
  });
});
