import { Starship, StarshipData } from '../interfaces/interfaces';

async function getStarshipsList(): Promise<Starship[] | string | null> {
  const apiUrl = 'https://swapi.dev/api/starships/';

  const response = await fetch(apiUrl);

  if (!response.ok) {
    return 'Network response was not ok';
  }

  if (response.ok) {
    const data: StarshipData = (await response.json()) as StarshipData;
    localStorage.setItem('data-page', JSON.stringify(data.results));
    return data.results;
  }

  return null;
}

export default getStarshipsList;
