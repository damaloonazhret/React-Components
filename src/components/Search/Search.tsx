import { ChangeEvent, ReactElement, useState } from 'react';
import style from './Search.module.scss';
import SearchButton from './SearchButton';

const Search = (): ReactElement => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  return (
    <header className={style.header}>
      <div>
        <input
          className={style.header__input}
          value={searchTerm}
          placeholder="Search..."
          onChange={handleChange}
          type="text"
        />
      </div>
      <div>
        <SearchButton searchTerm={searchTerm.trim()} />
      </div>
    </header>
  );
};

export default Search;
