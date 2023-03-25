import { Music } from 'types/types';
import classes from './CardItem.module.css';

type Props = { music: Music };

export default function CardItem({ music }: Props) {
  return (
    <li className={classes.item}>
      <img src={music.imgUrl} alt="album cover" />
      <h3>
        {music.title} ({music.releaseDate.getFullYear()})
      </h3>
      <hr />
      <p className={classes.genres}>
        {Object.entries(music.musicGenres).map(([key, value]) => {
          if (value) return <span key={key}>{key} </span>;
        })}
      </p>
      <br />
      <h4>
        {music.artistType}: {music.singerName}
      </h4>
      <br />
      <p>Country: {music.country}</p>
      <br />
    </li>
  );
}
