import React, { BaseSyntheticEvent, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { setMusic } from 'features/music/musicSlice';
import { useAppDispatch } from 'app/hooks';
import { Music, Genres } from 'types/types';
import { CommonInput, RadioInputs, SelectInputs } from 'components/Input/Input';
import InvalidText from 'components/InvalidText/InvalidText';
import PopUp from 'components/UI/PopUp/PopUp';
import classes from './Form.module.css';

const Form: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Music>({
    mode: 'onChange',
  });
  const [success, setSuccess] = useState<boolean>(false);

  if (success) {
    setTimeout(() => setSuccess(false), 2000);
  }

  const [imgPath, setImgPath] = useState<string>('default-cover.jpg');

  const handleForm: SubmitHandler<Music> = (formData) => {
    dispatch(setMusic({ ...formData, imgUrl: imgPath, id: crypto.randomUUID() }));
    reset();
    setImgPath('default-cover.jpg');
    setSuccess(true);
  };

  const musicGenresList = Object.values(Genres).map((value) => (
    <label key={value}>
      {value}
      <input type="checkbox" value={value} {...register('musicGenres', { required: true })} />
    </label>
  ));

  const handleImgFile = (event: BaseSyntheticEvent) => {
    const file: MediaSource | null = event.currentTarget.files[0];
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
            required
            name="type"
            values={['Artist', 'Band']}
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
          <label>Music Genres:</label>
          <div className={classes.genres} aria-invalid={!!errors.musicGenres}>
            {musicGenresList}
          </div>
        </div>
        <InvalidText error={!!errors.musicGenres} msg="Genres is required" />
      </div>
      <input type="submit" value="Submit" />
      <PopUp msg="Form successfully submitted!" display={success} />
    </form>
  );
};

export default Form;
