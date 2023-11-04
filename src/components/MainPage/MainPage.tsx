import { ReactElement, useEffect, useState } from 'react';
import Search from '../Search/Search';
import StarshipList from '../StarshipsList/StarshipList';
import style from './MainPage.module.scss';
import Preloader from '../../common/Preloader/Preloader';
import initStarships from '../../utils/initStarships/initStarships';
import filterResults from '../../utils/filterResults/filterResults';
import { MainPageState } from '../../interfaces/interfaces';
import clearFilteredResults from './clearFilteredResults';
import updateFilteredResultsInStateAndStorage from './updateFilteredResultsInStateAndStorage';

function MainPage(): ReactElement {
  const [state, setState] = useState<MainPageState>({
    results: [],
    filteredResults: [],
    isLoading: true,
  });

  const { results, isLoading } = state;
  let { filteredResults } = state;

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const fetchedResults = await initStarships();
      setState((prevState) => ({
        ...prevState,
        results: fetchedResults,
        isLoading: false,
      }));
    }

    fetchData();
  }, []);

  const handleSearch = (searchTerm: string): void => {
    if (searchTerm === '') {
      clearFilteredResults(setState, state);
    } else {
      filteredResults = filterResults(results, searchTerm);
      updateFilteredResultsInStateAndStorage(filteredResults, setState, state);
    }
  };

  const displayedResults = filteredResults.length ? filteredResults : results;

  return (
    <section className={style.main}>
      <Search onSearch={handleSearch} />
      {isLoading ? <Preloader /> : <StarshipList results={displayedResults} />}
      <div className={style.stars} />
      <div className={style.twinkling} />
    </section>
  );
}

export default MainPage;
