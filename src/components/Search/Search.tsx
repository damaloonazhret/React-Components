import { ChangeEvent, ReactElement, useState } from 'react';
import style from './Search.module.scss';
import SearchButton from './SearchButton';
import { SearchProps } from '../../interfaces/interfaces';

function Search(props: SearchProps): ReactElement {
  const { onSearch, setState, state, results, filteredResults } = props;
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
          setState={setState}
          state={state}
          results={results}
          filteredResults={filteredResults}
        />
      </div>
    </header>
  );
}

export default Search;
