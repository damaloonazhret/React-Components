import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Search from '../Search/Search';
import StarshipList from '../Starships/StarshipList';
import style from './MainPage.module.scss';
import Preloader from '../../common/Preloader/Preloader';
import Pagination from '../Pagination/Pagination';
import SelectItemsOnPage from '../ItemsOnPage/SelectItemsOnPage';
import MainPageContext from '../MainPageContext/MainPageContext';

const MainPage = (): React.ReactElement | null => {
  const contextValue = useContext(MainPageContext);

  if (!contextValue) {
    return null;
  }

  const { state } = contextValue;
  const { isLoading } = state;

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
