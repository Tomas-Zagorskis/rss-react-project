import CardList from '../../components/CardList/CardList';
import React, { BaseSyntheticEvent } from 'react';
import { Music } from 'types/types';

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
  };
  coverImageRef: React.RefObject<HTMLInputElement>;
  countryRef: React.RefObject<HTMLSelectElement>;
  releaseYearRef: React.RefObject<HTMLInputElement>;
  albums: Music[];

  constructor(props: object) {
    super(props);
    this.state = {
      music: [],
    };
    this.albums = [];

    this.albumCoverRef = React.createRef();
    this.artistOrBandRef = React.createRef();
    this.artistBandNameRef = React.createRef();
    this.musicGenresRef = {
      rock: React.createRef(),
      pop: React.createRef(),
      hipHop: React.createRef(),
      electronic: React.createRef(),
      country: React.createRef(),
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
    const releaseDate = this.releaseYearRef.current!.value;

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

    console.log(formData);
    this.setState((prevState) => ({ music: [...prevState.music, formData] }));
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Album Cover:
            <input type="text" name="title" ref={this.albumCoverRef} />
          </label>
          <br />
          <label>
            Artist or Band:
            <input type="radio" name="artistOrBandRef" value="artist" ref={this.artistOrBandRef} />
            Artist
            <input type="radio" name="artistType" value="band" ref={this.artistOrBandRef} />
            Band
          </label>
          <br />
          <label>
            Artist/Band Name:
            <input type="text" name="artistName" ref={this.artistBandNameRef} />
          </label>
          <br />
          <label>
            Music Genres:
            <input type="checkbox" name="musicGenres" value="rock" ref={this.musicGenresRef.rock} />
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
          </label>
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
              <option value="usa">USA</option>
              <option value="uk">UK</option>
              <option value="germany">Germany</option>
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
