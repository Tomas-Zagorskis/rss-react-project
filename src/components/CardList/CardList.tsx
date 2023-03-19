import { Music } from 'types/types';
import CardItem from './CardItem/CardItem';

import classes from './CardList.module.css';

type Props = {
  cards: Music[];
};

export default function CardList({ cards }: Props) {
  const itemMap = cards.map((item) => <CardItem music={item} key={item.id} />);

  return <ul className={classes.list}>{itemMap}</ul>;
}
