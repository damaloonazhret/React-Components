import { StarshipData } from '../_interfaces_/globalInterfaces';

async function getStarshipsList(): Promise<StarshipData | string | null> {
  const apiUrl: string = 'https://swapi.dev/api/starships/';
  const response: Response = await fetch(apiUrl);

  if (!response.ok) {
    return 'Network response was not ok';
  }

  if (response.ok) {
    const data: StarshipData = (await response.json()) as StarshipData;
    return data;
  }

  return null;
}

export default getStarshipsList;
