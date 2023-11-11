import { MouseEventHandler, ReactElement, useContext } from 'react';
import style from './Search.module.scss';
import MainPageContext from '../MainPageContext/MainPageContext';
import handleSearch from '../MainPage/handleSearch';

interface SearchTerm {
  searchTerm: string;
}

const SearchButton = ({ searchTerm }: SearchTerm): ReactElement => {
  const contextValue = useContext(MainPageContext);

  if (!contextValue) {
    throw new Error('MainPageContext is not defined');
  }

  const { setState, state } = contextValue;
  const handleClick: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();
    handleSearch(searchTerm, setState, state);
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
};

export default SearchButton;
