import { FC } from 'react';
import { Music, Types } from 'types/types';
import classes from './CardItem.module.css';

type Props = { music: Music };

const CardItem: FC<Props> = ({ music }) => {
  return (
    <li className={classes.item}>
      <img src={music.imgUrl} alt="album cover" />
      <h3>
        {music.title} ({new Date(music.releaseDate).getFullYear()})
      </h3>
      <hr />
      <p className={classes.genres}>
        {music.musicGenres.map((genre) => (
          <span key={genre}>{genre} </span>
        ))}
      </p>
      <br />
      <h4>
        {music.type === Types.artist ? Types.artist : Types.band}: {music.singerName}
      </h4>
      <br />
      <p>Country: {music.country}</p>
      <br />
    </li>
  );
};

export default CardItem;
