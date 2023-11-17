import { MouseEventHandler, ReactElement, useContext } from 'react';
import style from './Search.module.scss';

import { LocalStorageKeys } from '../../_interfaces_/interfaces';
import { Starship, StarshipData } from '../../_interfaces_/globalInterfaces';
import filterResults from '../../utils/filterResults/filterResults';
import clearFilteredResults from '../MainPage/clearFilteredResults';
import MainPageContext from '../MainPageContext/MainPageContext';
import { ACTIONS } from '../MainPageContext/MainPageProvider/MainPageProvider';

interface SearchTerm {
  searchTerm: string;
}

const SearchButton = ({ searchTerm }: SearchTerm): ReactElement | null => {
  const contextValue = useContext(MainPageContext);

  if (!contextValue) {
    return null;
  }

  const { state, dispatch } = contextValue;
  const { results } = state;
  const handleClick: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();

    let filteredResults: Starship[] = [];

    if (searchTerm === '') clearFilteredResults();
    else {
      filteredResults = filterResults(results, searchTerm);
      const dataPageResults = localStorage.getItem(LocalStorageKeys.DataPage);
      if (dataPageResults) {
        const dataPage: StarshipData = JSON.parse(dataPageResults);
        dataPage.results = filteredResults;
        localStorage.setItem(
          LocalStorageKeys.DataPageFilter,
          JSON.stringify(dataPage)
        );
      }
    }
    dispatch({ type: ACTIONS.SET_FILTERED_RESULTS, payload: filteredResults });
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
