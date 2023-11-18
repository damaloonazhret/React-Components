import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Search from '../Search/Search';
import StarshipList from '../Starships/StarshipList';
import style from './MainPage.module.scss';
import Preloader from '../../common/Preloader/Preloader';
import Pagination from '../Pagination/Pagination';
import SelectItemsOnPage from '../ItemsOnPage/SelectItemsOnPage';
import { MainPageState } from '../Actions/interfaces';
import initStarships from '../../utils/initStarships/initStarships';
import ACTIONS from '../Actions';
import { INITIAL_ITEMS_COUNT } from '../../_constants_/constants';

const MainPage = (): React.ReactElement | null => {
  const { isLoading, itemsOnPage } = useSelector(
    (state: MainPageState) => state
  );
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const fetchedData = await initStarships(itemsOnPage);
      dispatch({ type: ACTIONS.SET_RESULTS, payload: fetchedData.results });
      dispatch({
        type: ACTIONS.SET_ITEMS_COUNT,
        payload: fetchedData.count || INITIAL_ITEMS_COUNT,
      });
      dispatch({ type: ACTIONS.SET_IS_LOADING, payload: false });
    }
    fetchData();
  }, [itemsOnPage]);

  return (
    <section className={style.main}>
      <Search />
      <Pagination />
      <SelectItemsOnPage />
      {isLoading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={<StarshipList />} />
          <Route path="/page/:pageNumber" element={<StarshipList />} />
        </Routes>
      )}
      <div className={style.stars} />
      <div className={style.twinkling} />
    </section>
  );
};

export default MainPage;
