import { ReactElement, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Search from '../Search/Search';
import StarshipList from '../StarshipsList/StarshipList';
import style from './MainPage.module.scss';
import Preloader from '../../common/Preloader/Preloader';
import initStarships from '../../utils/initStarships/initStarships';
import { MainPageState } from '../../interfaces/interfaces';
import Pagination from '../Pagination/Pagination';
import SelectItemsOnPage from '../ItemsOnPage/SelectItemsOnPage';
import handlePageChange from './handlePageChange';
import setItemsOnPage from './setItemsOnPage';
import handleSearch from './handleSearch';

function MainPage(): ReactElement {
  const [state, setState] = useState<MainPageState>({
    results: [],
    filteredResults: [],
    isLoading: true,
    itemsCount: 0,
    currentPage: 1,
    itemsOnPage: 5,
  });

  const { results, isLoading } = state;
  const { filteredResults } = state;

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const fetchedData = await initStarships(
        state.currentPage,
        state.currentPage,
        state.itemsOnPage
      );
      setState((prevState) => ({
        ...prevState,
        results: fetchedData.results,
        itemsCount: fetchedData.count || 0,
        isLoading: false,
      }));
    }

    fetchData();
  }, []);

  const displayedResults = filteredResults.length ? filteredResults : results;

  return (
    <section className={style.main}>
      <Search
        onSearch={handleSearch}
        setState={setState}
        state={state}
        results={results}
        filteredResults={filteredResults}
      />
      <Pagination
        itemsCount={state.itemsCount}
        currentPage={state.currentPage}
        onPageChange={handlePageChange}
        itemsOnPage={state.itemsOnPage}
        setState={setState}
        state={state}
      />
      <SelectItemsOnPage setItemsOnPage={setItemsOnPage} setState={setState} />
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
