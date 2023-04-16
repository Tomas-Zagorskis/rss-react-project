import { render, screen } from '@testing-library/react';
import { test, suite, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from 'app/store';
import Form from './Form';

suite('Form Component', () => {
  global.URL.createObjectURL = vi.fn();

  test('renders the form correctly', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/singer/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/country/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/release date/i)).toBeInTheDocument();
    expect(screen.getByText(/artist or band/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/artist/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/band/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/upload image/i)).toBeInTheDocument();
    expect(screen.getByText(/music genres/i)).toBeInTheDocument();
    expect(screen.getByText(/submit/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/rock/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/pop/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/jazz/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/metal/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/other/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/rap/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/electronic/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/hiphop/i)).toBeInTheDocument();
  });

  test('should add a new music and display it', async () => {
    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );

    const titleInput = getByLabelText('Title*:');
    const typeInput = getByLabelText('Artist');
    const singerNameInput = getByLabelText('Singer*:');
    const countrySelect = getByLabelText('Country*:');
    const releaseDateInput = getByLabelText('Release Date*:');
    const imgFileInput = getByLabelText('Upload Image:');
    const genresInput = getByLabelText('Rock');

    // Fill the form
    await userEvent.type(titleInput, 'My Music');
    await userEvent.click(typeInput);
    await userEvent.type(singerNameInput, 'My Singer');
    await userEvent.selectOptions(countrySelect, 'USA');
    await userEvent.type(releaseDateInput, '2022-01-01');
    await userEvent.upload(imgFileInput, new File(['(⌐□_□)'], 'cover.jpg', { type: 'image/jpeg' }));
    await userEvent.click(genresInput);
    await userEvent.click(getByText('Submit'));

    expect(getByText('Form successfully submitted!')).toBeInTheDocument();

    // Verify the form is reset
    expect(titleInput).toHaveValue('');
    expect(typeInput).not.toBeChecked();
    expect(singerNameInput).toHaveValue('');
    expect(countrySelect).toHaveValue('');
    expect(releaseDateInput).toHaveValue('');
    expect(imgFileInput).toHaveValue('C:\\fakepath\\cover.jpg');
    expect(genresInput).not.toBeChecked();
  });
});
