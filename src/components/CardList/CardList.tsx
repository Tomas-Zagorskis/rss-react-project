import { Component, ReactNode } from 'react';
import { Music } from 'types/types';
import CardItem from './CardItem/CardItem';

import classes from './CardList.module.css';

type Props = {
  cards: Music[];
};

type State = {
  searchInput: string;
};

export default class CardList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const itemMap = this.props.cards.map((item) => <CardItem music={item} key={item.id} />);

    return <ul className={classes.list}>{itemMap}</ul>;
  }
}
