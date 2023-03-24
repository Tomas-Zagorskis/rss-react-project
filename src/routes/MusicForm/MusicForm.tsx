import CardList from '../../components/CardList/CardList';
import React, { BaseSyntheticEvent } from 'react';
import { Music } from 'types/types';
import classes from './MusicForm.module.css';

export default class MusicForm extends React.Component<object, { music: Music[]; valid: boolean }> {
  titleRef: React.RefObject<HTMLInputElement> = React.createRef();
  typeRef: React.RefObject<HTMLInputElement> = React.createRef();
  nameRef: React.RefObject<HTMLInputElement> = React.createRef();
  musicGenresRef: {
    rock: React.RefObject<HTMLInputElement>;
    pop: React.RefObject<HTMLInputElement>;
    hipHop: React.RefObject<HTMLInputElement>;
    electronic: React.RefObject<HTMLInputElement>;
    country: React.RefObject<HTMLInputElement>;
    metal: React.RefObject<HTMLInputElement>;
    rap: React.RefObject<HTMLInputElement>;
    jazz: React.RefObject<HTMLInputElement>;
  } = {
    rock: React.createRef(),
    pop: React.createRef(),
    hipHop: React.createRef(),
    electronic: React.createRef(),
    country: React.createRef(),
    metal: React.createRef(),
    rap: React.createRef(),
    jazz: React.createRef(),
  };
  imageRef: React.RefObject<HTMLInputElement> = React.createRef();
  countryRef: React.RefObject<HTMLSelectElement> = React.createRef();
  releaseDateRef: React.RefObject<HTMLInputElement> = React.createRef();

  constructor(props: object) {
    super(props);
    this.state = {
      music: [],
      valid: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  requiredValidity(refCurrent: HTMLInputElement) {
    if (!refCurrent.value.trim()) {
      refCurrent.setCustomValidity('Field is required!');
      this.setState({ valid: false });
      return false;
    }
    refCurrent.setCustomValidity('');
    this.setState({ valid: true });
    return true;
  }

  handleSubmit(event: BaseSyntheticEvent) {
    event.preventDefault();

    const title = this.titleRef.current!.value;
    const isValid = this.requiredValidity(this.titleRef.current!);
    const artistType = this.typeRef.current!.value;
    const artistName = this.nameRef.current!.value;
    const musicGenres = {
      rock: this.musicGenresRef.rock.current!.checked,
      pop: this.musicGenresRef.pop.current!.checked,
      hipHop: this.musicGenresRef.hipHop.current!.checked,
      electronic: this.musicGenresRef.electronic.current!.checked,
      country: this.musicGenresRef.country.current!.checked,
      metal: this.musicGenresRef.metal.current!.checked,
      jazz: this.musicGenresRef.jazz.current!.checked,
      rap: this.musicGenresRef.rap.current!.checked,
    };
    const imgUrl = URL.createObjectURL(this.imageRef.current!.files![0]);
    const country = this.countryRef.current!.value;
    const releaseDate = new Date(this.releaseDateRef.current!.value);
    if (!isValid) return;
    const formData: Music = {
      title,
      artistName,
      artistType,
      imgUrl,
      id: crypto.randomUUID(),
      musicGenres,
      country,
      releaseDate,
    };

    this.setState((prevState) => ({
      music: [...prevState.music, formData],
    }));
  }

  render() {
    return (
      <>
        <form className={classes.form}>
          <div className={classes['form-group']}>
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" ref={this.titleRef} id="title" />
          </div>
          <p>{this.titleRef.current?.validationMessage}</p>
          <div className={classes['form-group']}>
            <p>Artist or Band:</p>
            <div className={classes.type}>
              <label htmlFor="artist">
                Artist
                <input
                  type="radio"
                  id="artist"
                  name="artistOrBandRef"
                  value="artist"
                  ref={this.typeRef}
                />
              </label>
              <label htmlFor="band">
                Band
                <input
                  type="radio"
                  id="band"
                  name="artistOrBandRef"
                  value="band"
                  ref={this.typeRef}
                />
              </label>
            </div>
          </div>
          <div className={classes['form-group']}>
            <label htmlFor="author">Singer:</label>
            <input type="text" id="author" name="artistName" ref={this.nameRef} />
          </div>
          <div className={classes.controls}>
            <div className={classes.control}>
              <label htmlFor="country">Country:</label>
              <select name="country" id="country" ref={this.countryRef}>
                <option value="">Select a country</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Germany">Germany</option>
              </select>
            </div>
            <div className={classes.control}>
              <label htmlFor="date">Release Date:</label>
              <input type="date" id="date" name="releaseDate" ref={this.releaseDateRef} />
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
                  value="jazz"
                  ref={this.musicGenresRef.jazz}
                />
                Jazz
              </label>
            </div>
          </div>

          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>

        {this.state.music.length === 0 ? null : <CardList cards={this.state.music} />}
      </>
    );
  }
}
