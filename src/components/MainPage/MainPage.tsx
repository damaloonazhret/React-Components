import { ReactElement, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Search from '../Search/Search';
import StarshipList from '../StarshipsList/StarshipList';
import style from './MainPage.module.scss';
import Preloader from '../../common/Preloader/Preloader';
import initStarships from '../../utils/initStarships/initStarships';
import { Starship } from '../../interfaces/interfaces';
import Pagination from '../Pagination/Pagination';
import SelectItemsOnPage from '../ItemsOnPage/SelectItemsOnPage';
import handlePageChange from './handlePageChange';

import {
  INITIAL_CURRENT_PAGE,
  INITIAL_ITEMS_COUNT,
  INITIAL_ITEMS_ON_PAGE,
} from '../../_constants_/constants';

const MainPage = (): ReactElement => {
  const [results, setResults] = useState<Starship[]>([]);
  const [filteredResults, setFilteredResults] = useState<Starship[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsCount, setItemsCount] = useState(INITIAL_ITEMS_COUNT);
  const [currentPage, setCurrentPage] = useState(INITIAL_CURRENT_PAGE);
  const [itemsOnPage, setItemsOnPage] = useState(INITIAL_ITEMS_ON_PAGE);

  const displayedResults = filteredResults.length ? filteredResults : results;

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const fetchedData = await initStarships(itemsOnPage);
      setResults(fetchedData.results);
      setItemsCount(fetchedData.count || INITIAL_ITEMS_COUNT);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  const handleSearch = (newFilteredResults: Starship[]): void => {
    setFilteredResults(newFilteredResults);
  };

  return (
    <section className={style.main}>
      <Search
        onSearch={handleSearch}
        results={results}
        filteredResults={filteredResults}
      />
      <Pagination
        itemsCount={itemsCount}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        itemsOnPage={itemsOnPage}
        setIsLoading={setIsLoading}
        setResults={setResults}
        setCurrentPage={setCurrentPage}
      />
      <SelectItemsOnPage
        setIsLoading={setIsLoading}
        setItemsOnPage={setItemsOnPage}
        setCurrentPage={setCurrentPage}
        setItemsCount={setItemsCount}
        setResults={setResults}
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
};

export default MainPage;
