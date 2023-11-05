import { Starship, StarshipData } from '../interfaces/interfaces';

async function getPage(page: number): Promise<Starship[] | string | null> {
  const apiUrl: string = `https://swapi.dev/api/starships/?page=${page}`;
  const response: Response = await fetch(apiUrl);

  if (!response.ok) {
    return 'Network response was not ok';
  }

  if (response.ok) {
    const data: StarshipData = (await response.json()) as StarshipData;
    return data.results;
  }

  return null;
}

export default getPage;
