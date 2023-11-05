import { ReactElement, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Search from '../Search/Search';
import StarshipList from '../StarshipsList/StarshipList';
import style from './MainPage.module.scss';
import Preloader from '../../common/Preloader/Preloader';
import initStarships from '../../utils/initStarships/initStarships';
import filterResults from '../../utils/filterResults/filterResults';
import { MainPageState } from '../../interfaces/interfaces';
import clearFilteredResults from './clearFilteredResults';
import updateFilteredResultsInStateAndStorage from './updateFilteredResultsInStateAndStorage';
import Pagination from '../Pagination/Pagination';

function MainPage(): ReactElement {
  const [state, setState] = useState<MainPageState>({
    results: [],
    filteredResults: [],
    isLoading: true,
    itemsCount: 0,
    currentPage: 1,
    itemsOnPage: 10,
  });

  const { results, isLoading } = state;
  let { filteredResults } = state;

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const fetchedData = await initStarships();
      setState((prevState) => ({
        ...prevState,
        results: fetchedData.results,
        itemsCount: fetchedData.count || 0,
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

  const navigate = useNavigate();

  const handlePageChange = (pageNumber: number): void => {
    navigate(`/page/${pageNumber}`);
  };

  return (
    <section className={style.main}>
      <Search onSearch={handleSearch} />
      <Pagination
        itemsCount={state.itemsCount}
        currentPage={1}
        onPageChange={handlePageChange}
        itemsOnPage={state.itemsOnPage}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route
            path="/"
            element={<StarshipList results={displayedResults} />}
          />
          <Route
            path="/page/:pageNumber"
            element={<StarshipList results={displayedResults} />}
          />
        </Routes>
      )}
      <div className={style.stars} />
      <div className={style.twinkling} />
    </section>
  );
}

export default MainPage;
