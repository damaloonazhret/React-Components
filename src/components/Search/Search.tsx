import { ChangeEvent, ReactElement, useState } from 'react';
import style from './Search.module.scss';
import SearchButtonItem from './SearchButton';
import { SearchProps } from '../../interfaces/interfaces';

function Search({ onSearch }: SearchProps): ReactElement {
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
          onChange={handleChange}
          type="text"
        />
      </div>
      <div>
        <SearchButtonItem searchTerm={searchTerm.trim()} onSearch={onSearch} />
      </div>
    </header>
  );
}

export default Search;
