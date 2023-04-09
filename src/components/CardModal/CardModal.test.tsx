import { render, screen, fireEvent } from '@testing-library/react';
import CardModal from './CardModal';
import { Basic } from 'unsplash-js/dist/methods/photos/types';
import { vi } from 'vitest';

describe('CardModal component', () => {
  const mockItem = {
    id: '1',
    urls: {
      small: 'https://example.com/image.jpg',
    },
    likes: 10,
    created_at: '2022-03-19T12:00:00.000Z',
    user: {
      name: 'John Doe',
    },
    description: 'A photo of a mountain',
    alt_description: 'A scenic view of a mountain',
  } as Basic;
  const mockOnClose = vi.fn();

  beforeEach(() => {
    mockOnClose.mockReset();
  });

  it('should render the component without errors', () => {
    render(<CardModal item={mockItem} onClose={mockOnClose} />);
    const imgElement = screen.getByAltText('photo');
    const titleElement = screen.getByText('John Doe');
    const descriptionElement = screen.getByText('A photo of a mountain');
    const likesElement = screen.getByText('10');

    expect(imgElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
    expect(likesElement).toBeInTheDocument();
  });

  it('should call the onClose function when the modal is closed', () => {
    render(<CardModal item={mockItem} onClose={mockOnClose} />);
    const backdropElement = screen.getByTestId('backdrop');
    fireEvent.click(backdropElement);

    expect(mockOnClose).toHaveBeenCalled();
  });
});
