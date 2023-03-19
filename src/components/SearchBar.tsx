import { Component } from 'react';

type Props = {
  props1: string;
};

type State = {
  searchInput: string;
};

export default class SearchBar extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchInput: '',
    };
  }

  componentDidMount() {
    const searchValue = localStorage.getItem('search');
    if (searchValue?.trim()) {
      this.setState({
        searchInput: searchValue,
      });
    }
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
      <div>
        <input
          type="search"
          onChange={(event) => this.updateSearch(event.target.value)}
          value={searchInput}
        />
      </div>
    );
  }
}
