import React from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { Music } from 'types/types';
import classes from './Form.module.css';
import { CommonInput, RadioInputs, SelectInputs } from '../Input/Input';

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

  const handleForm = (formData: FieldValues) => {
    console.log(formData);

    // onSubmit(formData);
    // reset();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(handleForm)}>
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
      {errors.title && <p className={classes.invalid}>Title is required</p>}
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
        {errors.type && <p className={classes.invalid}>Type is required</p>}
      </div>
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
      {errors.singerName && <p className={classes.invalid}>Name is required</p>}
      <div className={classes.controls}>
        <div className={classes.control}>
          <SelectInputs
            label="Country*:"
            {...register('country', { required: true })}
            values={['USA', 'UK', 'Germany']}
            ariaInvalid={!!errors.country}
          />
          {errors.country && <p className={classes.invalid}>Select a country is required</p>}
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
          {errors.releaseDate && <p className={classes.invalid}>Date is required</p>}
        </div>
        <div className={classes.control}>
          <label htmlFor="imgUrl" className={classes.upload}>
            Upload Image:
          </label>
          <input type="file" name="imgUrl" id="imgUrl" accept="image/*" {...register} />
        </div>
      </div>
      {/* <div className={classes['form-group']}>
        <label htmlFor="genres">Music Genres:</label>
        <div className={classes.genres}>
          {Object.keys(typeof musicData[0].musicGenres).map((genre) => (

          <InputNested
            type="checkbox"
            name={`musicGenres.${genre}`}
            label={genre}
            register={register}
            
          />
          ))}
          <InputNested
            id="pop"
            type="checkbox"
            name="musicGenres"
            value="pop"
            label="Pop"
            {...register}
          />
          <InputNested
            id="country"
            type="checkbox"
            name="musicGenres"
            value="country"
            label="Country"
            {...register}
          />
          <InputNested
            id="electronic"
            type="checkbox"
            name="musicGenres"
            value="electronic"
            label="Electronic"
            {...register}
          />
          <InputNested
            id="hipHop"
            type="checkbox"
            name="musicGenres"
            value="hipHop"
            label="HipHop"
            {...register}
          />
          <InputNested
            id="metal"
            type="checkbox"
            name="musicGenres"
            value="metal"
            label="Metal"
            {...register}
          />
          <InputNested
            id="rap"
            type="checkbox"
            name="musicGenres"
            value="rap"
            label="Rap"
            {...register}
          />
          <InputNested
            id="other"
            type="checkbox"
            name="musicGenres"
            value="other"
            label="Other"
            defaultChecked
            {...register}
          />
        </div>
      </div> */}
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
