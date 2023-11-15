import { MouseEventHandler, ReactElement } from 'react';
import style from './Search.module.scss';
import {
  LocalStorageKeys,
  SearchButtonProps,
  Starship,
  StarshipData,
} from '../../interfaces/interfaces';
import filterResults from '../../utils/filterResults/filterResults';
import clearFilteredResults from '../MainPage/clearFilteredResults';

const SearchButton = (props: SearchButtonProps): ReactElement => {
  const handleClick: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();

    const { onSearch, results, searchTerm } = props;
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

    onSearch(filteredResults);
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
