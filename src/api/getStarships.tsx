import { Starship } from '../interfaces/interfaces';

async function getStarships(searchTerm: string): Promise<Starship> {
  const apiUrl = `https://swapi.dev/api/starships/${searchTerm}`;

  const response = await fetch(apiUrl);

  // if (response.status === 404) {
  //   return 'Resource not found';
  // }

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data: Starship = (await response.json()) as Starship;

  return data;
}

export default getStarships;
