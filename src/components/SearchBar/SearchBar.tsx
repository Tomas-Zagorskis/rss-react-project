import { Component } from 'react';

import classes from './SearchBar.module.css';

type Props = object;

type State = {
  searchInput: string;
};

export default class SearchBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchInput: localStorage.getItem('search')?.trim() || '',
    };
  }

  componentWillUnmount() {
    const { searchInput } = this.state;
    localStorage.setItem('search', searchInput);
  }

  updateSearch(text: string) {
    this.setState({ searchInput: text });
  }

  render() {
    const { searchInput } = this.state;

    return (
      <div className={classes.search}>
        <input
          type="search"
          onChange={(event) => this.updateSearch(event.target.value)}
          value={searchInput}
        />
        <img src="icon_search.svg" alt="search" />
      </div>
    );
  }
}
