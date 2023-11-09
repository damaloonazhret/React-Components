import { ReactElement, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
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

import {
  INITIAL_CURRENT_PAGE,
  INITIAL_ITEMS_COUNT,
  INITIAL_ITEMS_ON_PAGE,
} from '../../constants/constants';

function MainPage(): ReactElement {
  const [state, setState] = useState<MainPageState>({
    results: [],
    filteredResults: [],
    isLoading: true,
    itemsCount: INITIAL_ITEMS_COUNT,
    currentPage: INITIAL_CURRENT_PAGE,
    itemsOnPage: INITIAL_ITEMS_ON_PAGE,
  });

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
        itemsCount: fetchedData.count || INITIAL_ITEMS_COUNT,
        isLoading: false,
      }));
    }

    fetchData();
  }, []);

  const displayedResults = state.filteredResults.length
    ? state.filteredResults
    : state.results;
  const navigate = useNavigate();

  return (
    <section className={style.main}>
      <Search
        onSearch={handleSearch}
        setState={setState}
        state={state}
        results={state.results}
        filteredResults={state.filteredResults}
      />
      <Pagination
        itemsCount={state.itemsCount}
        currentPage={state.currentPage}
        onPageChange={handlePageChange}
        itemsOnPage={state.itemsOnPage}
        setState={setState}
        state={state}
        navigate={navigate}
      />
      <SelectItemsOnPage setItemsOnPage={setItemsOnPage} setState={setState} />
      {state.isLoading ? (
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
