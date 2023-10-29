import { useState } from 'react';
import style from './Search.module.scss';
import SearchButton from './SearchButton';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <header className={style.header}>
      <div>
        <input
          className={style.header__input}
          value={searchTerm}
          onChange={handleInputChange}
          type="text"
        />
      </div>
      <div>
        <SearchButton searchTerm={searchTerm} />
      </div>
    </header>
  );
}

export default Search;
