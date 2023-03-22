import { Music } from 'types/types';
import classes from './CardItem.module.css';

type Props = { music: Music };

export default function CardItem({ music }: Props) {
  return (
    <li className={classes.item}>
      <img src={music.imgUrl} alt="album cover" />
      <h3>
        {music.title} ({music.releaseDate})
      </h3>
      <h4>
        {music.artistType}: {music.artistName}
      </h4>
      {Object.entries(music.musicGenres).map(([key, value]) => {
        if (value) return <p key={key}>{key}</p>;
      })}
      <p>{music.country}</p>
    </li>
  );
}
