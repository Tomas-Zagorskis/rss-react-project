import { Component } from 'react';

type Props = {
  props1: string;
};

type State = {
  searchInput: string;
};

export default class SearchBar extends Component<Props, State> {
  state: State = {
    searchInput: '',
  };

  componentDidMount() {
    const search = localStorage.getItem('search');
    if (search)
      this.setState({
        searchInput: search,
      });
  }

  updateSearch(text: string) {
    this.setState({ searchInput: text });
    console.log(text);
  }

  componentWillUnmount() {
    localStorage.setItem('search', this.state.searchInput);
  }

  render() {
    return (
      <div>
        <input
          type="search"
          onChange={(event) => this.updateSearch(event.target.value)}
          value={this.state.searchInput}
        />
      </div>
    );
  }
}
