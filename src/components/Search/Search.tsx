import { ChangeEvent, ReactElement, useState } from 'react';
import style from './Search.module.scss';
import SearchButton from './SearchButton';
import { SearchProps } from '../../interfaces/interfaces';

const Search = (props: SearchProps): ReactElement => {
  const { onSearch, results } = props;
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
        <SearchButton
          searchTerm={searchTerm.trim()}
          onSearch={onSearch}
          results={results}
        />
      </div>
    </header>
  );
};

export default Search;
