import { ReactElement, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
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
import SelectItemsOnPage from '../ItemsOnPage/SelectItemsOnPage';
import selectPage from '../../utils/selectPage';
import selectItemsOnPage from '../../utils/selectItemsOnPage/selectItemsOnPage';

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
  let { filteredResults } = state;

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

  // const navigate = useNavigate();

  const setItemsOnPage = async (items: number): Promise<void> => {
    setState((prevState) => ({
      ...prevState,
      itemsOnPage: items,
    }));
  };

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      setState((prevState) => ({
        ...prevState,
        isLoading: true,
      }));
      const fetchedData = await selectItemsOnPage(state.itemsOnPage);
      if (typeof fetchedData === 'object' && fetchedData) {
        localStorage.clear();
        setState((prevState) => ({
          ...prevState,
          results: fetchedData.results,
          itemsCount: fetchedData.count || 0,
          isLoading: false,
          currentPage: 1,
        }));
      }
    };

    fetchData();
  }, [state.itemsOnPage]);

  const handlePageChange = async (pageNumber: number): Promise<void> => {
    setState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));
    const page = await selectPage(pageNumber, state.itemsOnPage);
    setState((prevState) => ({
      ...prevState,
      isLoading: false,
      results: page,
      currentPage: pageNumber,
    }));
  };

  const handleSearch = (searchTerm: string): void => {
    if (searchTerm === '') {
      clearFilteredResults(setState, state);
    } else {
      filteredResults = filterResults(results, searchTerm);
      updateFilteredResultsInStateAndStorage(filteredResults, setState, state);
    }
  };

  return (
    <section className={style.main}>
      <Search onSearch={handleSearch} />
      <Pagination
        itemsCount={state.itemsCount}
        currentPage={state.currentPage}
        onPageChange={handlePageChange}
        itemsOnPage={state.itemsOnPage}
      />
      <SelectItemsOnPage setItemsOnPage={setItemsOnPage} />
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
