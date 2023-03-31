import React, { BaseSyntheticEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Music, genres } from '../../types/types';
import classes from './Form.module.css';
import { CommonInput, RadioInputs, SelectInputs } from '../Input/Input';
import InvalidText from '../../components/InvalidText/InvalidText';

type Props = {
  onSubmit: (data: Music) => void;
};

const Form: React.FC<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Music>({
    mode: 'onChange',
  });
  const [imgPath, setImgPath] = useState<string>('default-cover.jpg');

  const handleForm: SubmitHandler<Music> = (formData) => {
    onSubmit({ ...formData, imgUrl: imgPath, id: crypto.randomUUID() });
    reset();
    setImgPath('default-cover.jpg');
  };

  const musicGenresList = Object.values(genres).map((value) => (
    <label key={value}>
      {value}
      <input type="checkbox" value={value} {...register('musicGenres', { required: true })} />
    </label>
  ));

  const handleImgFile = (event: BaseSyntheticEvent) => {
    const file = event.currentTarget.files[0];
    if (file) setImgPath(URL.createObjectURL(file));
    if (!file) setImgPath('default-cover.jpg');
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(handleForm)}>
      <div>
        <div className={classes['form-group']}>
          <CommonInput
            type="text"
            label="Title*:"
            name="title"
            register={register}
            required
            ariaInvalid={!!errors.title}
          />
        </div>
        <InvalidText error={!!errors.title} msg="Title is required" />
      </div>
      <div className={classes['form-group']}>
        <p>Artist or Band:</p>
        <div className={classes.type} aria-invalid={!!errors.type}>
          <RadioInputs
            register={register}
            required={true}
            name="type"
            values={['artist', 'band']}
            labels={['Artist', 'Band']}
          />
        </div>
        <InvalidText error={!!errors.type} msg="Type is required" />
      </div>
      <div>
        <div className={classes['form-group']}>
          <CommonInput
            required
            type="text"
            register={register}
            name="singerName"
            label="Singer*:"
            ariaInvalid={!!errors.singerName}
          />
        </div>
        <InvalidText error={!!errors.singerName} msg="Name is required" />
      </div>
      <div className={classes.controls}>
        <div className={classes.control}>
          <SelectInputs
            label="Country*:"
            {...register('country', { required: true })}
            values={['USA', 'UK', 'Germany']}
            ariaInvalid={!!errors.country}
          />
          <InvalidText error={!!errors.country} msg="Select a country is required" />
        </div>
        <div className={classes.control}>
          <CommonInput
            type="date"
            name="releaseDate"
            label="Release Date*:"
            register={register}
            required
            ariaInvalid={!!errors.releaseDate}
          />
          <InvalidText error={!!errors.releaseDate} msg="Date is required" />
        </div>
        <div className={classes.control}>
          <label htmlFor="imgFile" className={classes.upload} aria-invalid={!!errors.imgFile}>
            <img src={imgPath} alt="cover" height="25px" /> Upload Image:
          </label>
          <input
            type="file"
            id="imgFile"
            accept="image/*"
            {...register('imgFile', {
              required: true,
              onChange(event) {
                handleImgFile(event);
              },
            })}
          />
          <InvalidText error={!!errors.imgFile} msg="Image is required" />
        </div>
      </div>
      <div>
        <div className={classes['form-group']}>
          <label htmlFor="genres">Music Genres:</label>
          <div className={classes.genres} aria-invalid={!!errors.musicGenres}>
            {musicGenresList}
          </div>
        </div>
        <InvalidText error={!!errors.musicGenres} msg="Genres is required" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
