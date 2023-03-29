import React, { FormEvent } from 'react';
import { Music } from 'types/types';
import classes from './Form.module.css';
import { InputNested, InputSibling } from '../Input/Input';

type Props = {
  onSubmit: (data: Music) => void;
};

export default class Form extends React.Component<Props, { valid: boolean }> {
  private formRef = React.createRef<HTMLFormElement>();

  private titleRef = React.createRef<HTMLInputElement>();
  private artistRef = React.createRef<HTMLInputElement>();
  private bandRef = React.createRef<HTMLInputElement>();
  private nameRef = React.createRef<HTMLInputElement>();
  private musicGenresRef = {
    rock: React.createRef<HTMLInputElement>(),
    pop: React.createRef<HTMLInputElement>(),
    hipHop: React.createRef<HTMLInputElement>(),
    electronic: React.createRef<HTMLInputElement>(),
    country: React.createRef<HTMLInputElement>(),
    metal: React.createRef<HTMLInputElement>(),
    rap: React.createRef<HTMLInputElement>(),
    other: React.createRef<HTMLInputElement>(),
  };
  private imageRef = React.createRef<HTMLInputElement>();
  private countryRef = React.createRef<HTMLSelectElement>();
  private releaseDateRef = React.createRef<HTMLInputElement>();

  constructor(props: Props) {
    super(props);
    this.state = {
      valid: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: FormEvent) {
    event.preventDefault();

    const title = this.titleRef.current!.value;
    const type = {
      artist: this.artistRef.current!.checked,
      band: this.bandRef.current!.checked,
    };
    const singerName = this.nameRef.current!.value;
    const file = this.imageRef.current!.files![0];
    const imgUrl = file ? URL.createObjectURL(file) : 'default-cover.jpg';
    const country = this.countryRef.current!.value;
    const releaseDate = new Date(this.releaseDateRef.current!.value);
    const musicGenres = {
      rock: this.musicGenresRef.rock.current!.checked,
      pop: this.musicGenresRef.pop.current!.checked,
      hipHop: this.musicGenresRef.hipHop.current!.checked,
      electronic: this.musicGenresRef.electronic.current!.checked,
      country: this.musicGenresRef.country.current!.checked,
      metal: this.musicGenresRef.metal.current!.checked,
      rap: this.musicGenresRef.rap.current!.checked,
      other: this.musicGenresRef.other.current!.checked,
    };

    const isTitleValid = this.requiredValidity(this.titleRef.current!);
    const isNameValid = this.requiredValidity(this.nameRef.current!);
    const isCountryValid = this.requiredValidity(this.countryRef.current!);
    const isDateValid = this.requiredValidity(this.releaseDateRef.current!);
    if (isTitleValid && isNameValid && isCountryValid && isDateValid) {
      const formData: Music = {
        title,
        singerName,
        type,
        imgUrl,
        id: crypto.randomUUID(),
        musicGenres,
        country,
        releaseDate,
      };
      const { onSubmit } = this.props;
      onSubmit(formData);

      this.formRef.current?.reset();
    }
  }

  requiredValidity(refCurrent: HTMLInputElement | HTMLSelectElement) {
    if (!refCurrent.value.trim()) {
      refCurrent.setCustomValidity('Field is required!');
      this.setState({ valid: false });
      return false;
    }
    refCurrent.setCustomValidity('');
    this.setState({ valid: true });
    return true;
  }

  render() {
    const { valid } = this.state;
    return (
      <form className={classes.form} ref={this.formRef}>
        <div className={classes['form-group']}>
          <InputSibling type="text" id="title" name="title" title="Title*:" ref={this.titleRef} />
        </div>
        <p className={classes.invalid}>{this.titleRef.current?.validationMessage}</p>
        <div className={classes['form-group']}>
          <p>Artist or Band:</p>
          <div className={classes.type}>
            <InputNested
              type="radio"
              id="artist"
              value="artist"
              name="typeRef"
              title="Artist"
              ref={this.artistRef}
              defaultChecked
            />
            <InputNested
              type="radio"
              id="band"
              value="band"
              name="typeRef"
              title="Band"
              ref={this.bandRef}
            />
          </div>
        </div>
        <div className={classes['form-group']}>
          <InputSibling
            id="author"
            type="text"
            name="artistName"
            ref={this.nameRef}
            title="Singer*:"
          />
        </div>
        <p className={classes.invalid}>{this.nameRef.current?.validationMessage}</p>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="ofCountry">Country*:</label>
            <select name="country" id="ofCountry" ref={this.countryRef}>
              <option value="">Select a country</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Germany">Germany</option>
            </select>
            <p className={classes.invalid}>{this.countryRef.current?.validationMessage}</p>
          </div>
          <div className={classes.control}>
            <InputSibling
              id="date"
              type="date"
              name="releaseDate"
              title="Release Date*:"
              ref={this.releaseDateRef}
            />
            <p className={classes.invalid}>{this.releaseDateRef.current?.validationMessage}</p>
          </div>
          <div className={classes.control}>
            <label htmlFor="imgUrl" className={classes.upload}>
              Upload Image:
            </label>
            <input type="file" name="imgUrl" id="imgUrl" accept="image/*" ref={this.imageRef} />
          </div>
        </div>
        <div className={classes['form-group']}>
          <label htmlFor="genres">Music Genres:</label>
          <div className={classes.genres}>
            <InputNested
              id="rock"
              type="checkbox"
              name="musicGenres"
              value="rock"
              title="Rock"
              ref={this.musicGenresRef.rock}
            />
            <InputNested
              id="pop"
              type="checkbox"
              name="musicGenres"
              value="pop"
              title="Pop"
              ref={this.musicGenresRef.pop}
            />
            <InputNested
              id="country"
              type="checkbox"
              name="musicGenres"
              value="country"
              title="Country"
              ref={this.musicGenresRef.country}
            />
            <InputNested
              id="electronic"
              type="checkbox"
              name="musicGenres"
              value="electronic"
              title="Electronic"
              ref={this.musicGenresRef.electronic}
            />
            <InputNested
              id="hipHop"
              type="checkbox"
              name="musicGenres"
              value="hipHop"
              title="HipHop"
              ref={this.musicGenresRef.hipHop}
            />
            <InputNested
              id="metal"
              type="checkbox"
              name="musicGenres"
              value="metal"
              title="Metal"
              ref={this.musicGenresRef.metal}
            />
            <InputNested
              id="rap"
              type="checkbox"
              name="musicGenres"
              value="rap"
              title="Rap"
              ref={this.musicGenresRef.rap}
            />
            <InputNested
              id="other"
              type="checkbox"
              name="musicGenres"
              value="other"
              title="Other"
              defaultChecked
              ref={this.musicGenresRef.other}
            />
          </div>
        </div>
        {valid}
        <input type="submit" value="Submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}
