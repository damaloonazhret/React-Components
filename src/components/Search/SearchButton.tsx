import { Component, ReactElement } from 'react';
import style from './Search.module.scss';
import handleSearch from '../../utils/handleSearch';

class SearchButton extends Component<{ searchTerm: string }, void> {
  render(): ReactElement {
    const { searchTerm } = this.props;
    return (
      <button
        onClick={async (): Promise<void> => handleSearch(searchTerm)}
        className={style.header__button}
        type="button"
      >
        Search
      </button>
    );
  }
}

export default SearchButton;
