import { FC } from 'react';
import { useAppSelector } from 'app/hooks';
import CardItem from './CardItem/CardItem';
import classes from './CardList.module.css';

const CardList: FC = () => {
  const cards = useAppSelector((state) => state.music.musicList);

  if (!cards.length) return null;

  const itemMap = cards.map((item) => <CardItem music={item} key={item.id} />);

  return <ul className={classes.list}>{itemMap}</ul>;
};

export default CardList;
