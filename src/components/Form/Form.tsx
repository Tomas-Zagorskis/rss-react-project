import React, { BaseSyntheticEvent, FormEvent } from 'react';
import { Music } from 'types/types';
import classes from './Form.module.css';

type Props = {
  onSubmit: (data: Music) => void;
};

export default class Form extends React.Component<Props, { valid: boolean }> {
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

  handleSubmit(event: FormEvent) {
    event.preventDefault();

    const title = this.titleRef.current!.value;
    let isValid = this.requiredValidity(this.titleRef.current!);
    if (!isValid) return;

    const artistType = this.artistRef.current!.value;
    const bandType = this.bandRef.current!.value;

    const singerName = this.nameRef.current!.value;
    isValid = this.requiredValidity(this.nameRef.current!);
    if (!isValid) return;

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

    const file = this.imageRef.current!.files![0];
    const imgUrl = file ? URL.createObjectURL(file) : 'default-cover.jpg';

    const country = this.countryRef.current!.value;
    isValid = this.requiredValidity(this.countryRef.current!);
    if (!isValid) return;

    const releaseDate = new Date(this.releaseDateRef.current!.value);
    isValid = this.requiredValidity(this.releaseDateRef.current!);
    if (!isValid) return;

    const formData: Music = {
      title,
      singerName,
      artistType,
      imgUrl,
      id: crypto.randomUUID(),
      musicGenres,
      country,
      releaseDate,
    };

    this.props.onSubmit(formData);
  }

  render() {
    return (
      <>
        <form className={classes.form}>
          <div className={classes['form-group']}>
            <label htmlFor="title">Title*: </label>
            <input type="text" name="title" ref={this.titleRef} id="title" />
          </div>
          <p className={classes.invalid}>{this.titleRef.current?.validationMessage}</p>
          <div className={classes['form-group']}>
            <p>Artist or Band:</p>
            <div className={classes.type}>
              <label htmlFor="artist">
                Artist
                <input
                  type="radio"
                  id="artist"
                  name="typeRef"
                  value="artist"
                  ref={this.artistRef}
                  defaultChecked
                />
              </label>
              <label htmlFor="band">
                Band
                <input type="radio" id="band" name="typeRef" value="band" ref={this.bandRef} />
              </label>
            </div>
          </div>
          <div className={classes['form-group']}>
            <label htmlFor="author">Singer*:</label>
            <input type="text" id="author" name="artistName" ref={this.nameRef} />
          </div>
          <p className={classes.invalid}>{this.nameRef.current?.validationMessage}</p>
          <div className={classes.controls}>
            <div className={classes.control}>
              <label htmlFor="country">Country*:</label>
              <select name="country" id="country" ref={this.countryRef}>
                <option value="">Select a country</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Germany">Germany</option>
              </select>
              <p className={classes.invalid}>{this.countryRef.current?.validationMessage}</p>
            </div>
            <div className={classes.control}>
              <label htmlFor="date">Release Date*:</label>
              <input type="date" id="date" name="releaseDate" ref={this.releaseDateRef} />
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
              <label>
                <input
                  type="checkbox"
                  name="musicGenres"
                  value="rock"
                  ref={this.musicGenresRef.rock}
                />
                Rock
              </label>
              <label>
                <input
                  type="checkbox"
                  name="musicGenres"
                  value="pop"
                  ref={this.musicGenresRef.pop}
                />
                Pop
              </label>
              <label>
                <input
                  type="checkbox"
                  name="musicGenres"
                  value="country"
                  ref={this.musicGenresRef.country}
                />
                Country
              </label>
              <label>
                <input
                  type="checkbox"
                  name="musicGenres"
                  value="electronic"
                  ref={this.musicGenresRef.electronic}
                />
                Electronic
              </label>
              <label>
                <input
                  type="checkbox"
                  name="musicGenres"
                  value="hipHop"
                  ref={this.musicGenresRef.hipHop}
                />
                Hip Hop
              </label>
              <label>
                <input
                  type="checkbox"
                  name="musicGenres"
                  value="metal"
                  ref={this.musicGenresRef.metal}
                />
                Metal
              </label>
              <label>
                <input
                  type="checkbox"
                  name="musicGenres"
                  value="rap"
                  ref={this.musicGenresRef.rap}
                />
                Rap
              </label>
              <label>
                <input
                  type="checkbox"
                  name="musicGenres"
                  value="other"
                  defaultChecked
                  ref={this.musicGenresRef.other}
                />
                Other
              </label>
            </div>
          </div>

          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </>
    );
  }
}
