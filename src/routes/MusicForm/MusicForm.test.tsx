import { render, act } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import MusicForm from './MusicForm';
import userEvent from '@testing-library/user-event';

describe('MusicForm', () => {
  global.URL.createObjectURL = vi.fn();
  it('should add a new music and display it', async () => {
    const { getByLabelText, getByText, getAllByText } = render(<MusicForm />);
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

    // Verify the new music is displayed
    expect(getByText(/My Music/)).toBeInTheDocument();
    expect(getByText(/My Singer/)).toBeInTheDocument();
    expect(getByText('USA')).toBeInTheDocument();
    expect(getByText(/2022/)).toBeInTheDocument();
  });
});
