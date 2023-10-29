import { Starship, StarshipData } from '../interfaces/interfaces';

async function getStarshipsList(): Promise<Starship[]> {
  const apiUrl = 'https://swapi.dev/api/starships/';

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data: StarshipData = (await response.json()) as StarshipData;

  return data.results;
}

export default getStarshipsList;
