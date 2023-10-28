import style from './Search.module.scss';

function Search() {
  return (
    <header className={style.header}>
      <div>
        <input className={style.header__input} type="text" />
      </div>
      <div>
        <button className={style.header__button} type="button">
          Search
        </button>
      </div>
    </header>
  );
}

export default Search;
