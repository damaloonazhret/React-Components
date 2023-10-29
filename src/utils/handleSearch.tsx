import fetchPokemonData from '../api/fetchPokemonData';

const handleSearch = async (searchTerm: string) => {
  // eslint-disable-next-line no-console
  console.log(await fetchPokemonData(searchTerm));
};

export default handleSearch;
