import { Music } from 'types/types';
import classes from './CardItem.module.css';

type Props = { music: Music };

export default function CardItem({ music }: Props) {
  return (
    <li className={classes.item}>
      <img src={music.imgUrl} alt="album cover" />
      <h3>
        {music.title} ({music.year})
      </h3>
      <h4>Artist: {music.artist}</h4>
    </li>
  );
}
