import { PokemonData } from '../interfaces';

async function fetchPokemonData(
  searchTerm: string
): Promise<PokemonData | string> {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchTerm}`;

  const response = await fetch(apiUrl);

  if (response.status === 404) {
    return 'Resource not found';
  }

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data: PokemonData = (await response.json()) as PokemonData;

  return data;
}

export default fetchPokemonData;
