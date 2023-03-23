import CardList from '../../components/CardList/CardList';
import React, { BaseSyntheticEvent } from 'react';
import { Music } from 'types/types';
import classes from './MusicForm.module.css';

export default class MusicForm extends React.Component<object, { music: Music[] }> {
  albumCoverRef: React.RefObject<HTMLInputElement>;
  artistOrBandRef: React.RefObject<HTMLInputElement>;
  artistBandNameRef: React.RefObject<HTMLInputElement>;
  musicGenresRef: {
    rock: React.RefObject<HTMLInputElement>;
    pop: React.RefObject<HTMLInputElement>;
    hipHop: React.RefObject<HTMLInputElement>;
    electronic: React.RefObject<HTMLInputElement>;
    country: React.RefObject<HTMLInputElement>;
    metal: React.RefObject<HTMLInputElement>;
    rap: React.RefObject<HTMLInputElement>;
    jazz: React.RefObject<HTMLInputElement>;
    "R'n'B": React.RefObject<HTMLInputElement>;
  };
  coverImageRef: React.RefObject<HTMLInputElement>;
  countryRef: React.RefObject<HTMLSelectElement>;
  releaseYearRef: React.RefObject<HTMLInputElement>;

  constructor(props: object) {
    super(props);
    this.state = {
      music: [],
    };

    this.albumCoverRef = React.createRef();
    this.artistOrBandRef = React.createRef();
    this.artistBandNameRef = React.createRef();
    this.musicGenresRef = {
      rock: React.createRef(),
      pop: React.createRef(),
      hipHop: React.createRef(),
      electronic: React.createRef(),
      country: React.createRef(),
      metal: React.createRef(),
      rap: React.createRef(),
      jazz: React.createRef(),
      "R'n'B": React.createRef(),
    };
    this.coverImageRef = React.createRef();
    this.countryRef = React.createRef();
    this.releaseYearRef = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event: BaseSyntheticEvent) {
    event.preventDefault();

    const title = this.albumCoverRef.current!.value;
    const artistType = this.artistOrBandRef.current!.value;
    const artistName = this.artistBandNameRef.current!.value;
    const musicGenres = {
      rock: this.musicGenresRef.rock.current!.checked,
      pop: this.musicGenresRef.pop.current!.checked,
      hipHop: this.musicGenresRef.hipHop.current!.checked,
      electronic: this.musicGenresRef.electronic.current!.checked,
      country: this.musicGenresRef.country.current!.checked,
    };
    const imgUrl = URL.createObjectURL(this.coverImageRef.current!.files![0]);
    const country = this.countryRef.current!.value;
    const releaseDate = new Date(this.releaseYearRef.current!.value);

    const formData = {
      title,
      artistName,
      artistType,
      imgUrl,
      id: crypto.randomUUID(),
      musicGenres,
      country,
      releaseDate,
    };

    this.setState((prevState: { music: Music[] }) => ({
      music: [...prevState.music, formData],
    }));
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit} className={classes.form}>
          <div>
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" ref={this.albumCoverRef} id="title" />
          </div>
          <div>
            <label htmlFor="artistBand">Artist or Band:</label>
            <div>
              <input
                type="radio"
                id="artist"
                name="artistOrBandRef"
                value="artist"
                ref={this.artistOrBandRef}
              />
              <label htmlFor="artist">Artist</label>
              <input
                type="radio"
                id="band"
                name="artistType"
                value="band"
                ref={this.artistOrBandRef}
              />
              <label htmlFor="band">Band</label>
            </div>
          </div>
          <div>
            <label htmlFor="author">Artist/Band Name:</label>
            <input type="text" id="author" name="artistName" ref={this.artistBandNameRef} />
          </div>
          <div>
            <label htmlFor="genres">Music Genres:</label>
            <div>
              <input
                type="checkbox"
                name="musicGenres"
                value="rock"
                ref={this.musicGenresRef.rock}
              />
              Rock
              <input type="checkbox" name="musicGenres" value="pop" ref={this.musicGenresRef.pop} />
              Pop
              <input
                type="checkbox"
                name="musicGenres"
                value="country"
                ref={this.musicGenresRef.country}
              />
              Country
              <input
                type="checkbox"
                name="musicGenres"
                value="electronic"
                ref={this.musicGenresRef.electronic}
              />
              Electronic
              <input
                type="checkbox"
                name="musicGenres"
                value="hipHop"
                ref={this.musicGenresRef.hipHop}
              />
              Hip Hop
            </div>
          </div>
          <br />
          <label>
            Cover Image:
            <input type="file" name="imgUrl" accept="image/*" ref={this.coverImageRef} />
          </label>
          <br />
          <label>
            Country:
            <select name="country" ref={this.countryRef}>
              <option value="">Select a country</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Germany">Germany</option>
            </select>
          </label>
          <br />
          <label>
            Release Year:
            <input type="date" name="releaseDate" ref={this.releaseYearRef} />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>

        {this.state.music.length === 0 ? null : <CardList cards={this.state.music} />}
      </>
    );
  }
}
