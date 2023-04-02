import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { CommonInput, SelectInputs, RadioInputs } from './Input';

test('CommonInput renders correctly', () => {
  const registerMock = vi.fn();
  render(
    <CommonInput
      type="text"
      name="type"
      label="Artist"
      register={registerMock}
      required={true}
      ariaInvalid={false}
    />
  );
  const labelElement = screen.getByText(/Artist/i);
  const inputElement = screen.getByLabelText(/Artist/i);
  expect(labelElement).toBeInTheDocument();
  expect(inputElement).toBeInTheDocument();
  expect(registerMock).toHaveBeenCalledWith('type', { required: true });
});

test('RadioInputs renders correctly', () => {
  const registerMock = vi.fn();
  render(
    <RadioInputs
      name="musicGenres"
      labels={['Rock', 'Pop', 'Jazz']}
      values={['rock', 'pop', 'jazz']}
      register={registerMock}
      required={true}
      ariaInvalid={false}
    />
  );
  const rockLabel = screen.getByText(/Rock/i);
  const popLabel = screen.getByText(/Pop/i);
  const jazzLabel = screen.getByText(/Jazz/i);
  expect(rockLabel).toBeInTheDocument();
  expect(popLabel).toBeInTheDocument();
  expect(jazzLabel).toBeInTheDocument();
  expect(registerMock).toHaveBeenCalledWith('musicGenres', { required: true });
});

test('SelectInputs renders correctly', () => {
  const registerMock = vi.fn();
  const options = ['USA', 'Canada', 'Mexico'];
  render(
    <SelectInputs
      label="Country"
      values={options}
      ariaInvalid={false}
      {...registerMock('country', { required: true })}
    />
  );
  const labelElement = screen.getByText(/^Country/i);
  const selectElement = screen.getByLabelText(/^country/i);
  expect(labelElement).toBeInTheDocument();
  expect(selectElement).toBeInTheDocument();
  expect(selectElement.children.length).toBe(options.length + 1); // +1 for the empty option
  expect(registerMock).toHaveBeenCalledWith('country', { required: true });
});
