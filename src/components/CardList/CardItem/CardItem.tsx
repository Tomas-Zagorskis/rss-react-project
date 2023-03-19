import { Component } from 'react';

import { Music } from 'types/types';
import classes from './CardItem.module.css';

export default class CardItem extends Component<{ music: Music }> {
  constructor(props: { music: Music }) {
    super(props);
  }

  render() {
    return (
      <li className={classes.item}>
        <img src={this.props.music.imgUrl} alt="album cover" />
        <h3>
          {this.props.music.title} ({this.props.music.year})
        </h3>
        <h4>Artist: {this.props.music.artist}</h4>
      </li>
    );
  }
}
