import { Component, MouseEventHandler, ReactElement } from 'react';
import style from './Search.module.scss';
import { SearchButtonProps } from '../../interfaces/interfaces';

class SearchButton extends Component<SearchButtonProps, void> {
  handleClick: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();
    const { searchTerm, onSearch } = this.props;
    await onSearch(searchTerm);
  };

  render(): ReactElement {
    return (
      <button
        onClick={this.handleClick}
        className={style.header__button}
        type="button"
      >
        Search
      </button>
    );
  }
}

export default SearchButton;
