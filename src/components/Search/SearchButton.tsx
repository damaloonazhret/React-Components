import { Component, ReactElement } from 'react';
import style from './Search.module.scss';

class SearchButton extends Component<
  { searchTerm: string; onSearch: (searchTerm: string) => Promise<void> },
  void
> {
  render(): ReactElement {
    const { searchTerm, onSearch } = this.props;
    return (
      <button
        onClick={async (): Promise<void> => onSearch(searchTerm)}
        className={style.header__button}
        type="button"
      >
        Search
      </button>
    );
  }
}

export default SearchButton;
