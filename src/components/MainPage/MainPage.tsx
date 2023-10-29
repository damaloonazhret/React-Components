import { ReactElement } from 'react';
import Search from '../Search/Search';
import ItemList from '../StarshipsList/StarshipList';
import style from './MainPage.module.scss';

function MainPage(): ReactElement {
  return (
    <section className={style.main}>
      <Search />
      <ItemList />
      <div className={style.stars} />
      <div className={style.twinkling} />
    </section>
  );
}

export default MainPage;
