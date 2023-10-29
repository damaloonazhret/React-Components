import { Component, ReactElement } from 'react';
import style from './Search.module.scss';
import SearchButton from './SearchButton';

class Search extends Component<void, void> {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }

  handleInputChange = (event): void => {
    this.setState({ searchTerm: event.target.value });
  };

  render(): ReactElement {
    const { onSearch } = this.props;
    const { searchTerm } = this.state;

    return (
      <header className={style.header}>
        <div>
          <input
            className={style.header__input}
            value={searchTerm}
            onChange={this.handleInputChange}
            type="text"
          />
        </div>
        <div>
          <SearchButton searchTerm={searchTerm} onSearch={onSearch} />
        </div>
      </header>
    );
  }
}

export default Search;
