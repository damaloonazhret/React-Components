import { MouseEventHandler, ReactElement } from 'react';
import style from './Search.module.scss';
import { SearchButtonProps } from '../../interfaces/interfaces';

function SearchButton(props: SearchButtonProps): ReactElement {
  const handleClick: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();
    const { onSearch } = props;
    onSearch(props);
  };

  return (
    <button
      onClick={handleClick}
      className={style.header__button}
      type="button"
    >
      Search
    </button>
  );
}

export default SearchButton;
