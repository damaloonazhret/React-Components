import { ChangeEvent, Component, ReactElement } from 'react';
import style from './Search.module.scss';
import SearchButton from './SearchButton';
import { SearchProps, SearchState } from '../../interfaces/interfaces';

class Search extends Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
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
          <SearchButton searchTerm={searchTerm.trim()} onSearch={onSearch} />
        </div>
      </header>
    );
  }
}

export default Search;
