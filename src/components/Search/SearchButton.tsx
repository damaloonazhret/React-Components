import { Component } from 'react';
import style from './Search.module.scss';
import handleSearch from '../../utils/handleSearch';

class SearchButton extends Component<{ searchTerm: string }, void> {
  render() {
    const { searchTerm } = this.props;
    return (
      <button
        onClick={() => handleSearch(searchTerm)}
        className={style.header__button}
        type="button"
      >
        Search
      </button>
    );
  }
}

export default SearchButton;
