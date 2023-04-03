import { FC } from 'react';
import { Music } from 'types/types';
import CardItem from './CardItem/CardItem';
import classes from './CardList.module.css';

type Props = {
  cards: Music[];
};

const CardList: FC<Props> = ({ cards }) => {
  const itemMap = cards.map((item) => <CardItem music={item} key={item.id} />);

  return <ul className={classes.list}>{itemMap}</ul>;
};

export default CardList;
