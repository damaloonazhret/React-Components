import { Starship, StarshipData } from '../interfaces/interfaces';

async function getAllStarships(): Promise<Starship[] | string | null> {
  const results: Starship[] = [];
  let nextUrl: string | null = 'https://swapi.dev/api/starships/';
  const allStarships = localStorage.getItem('data-page-all');
  if (!allStarships) {
    while (nextUrl) {
      const response = await fetch(nextUrl);
      if (!response.ok) {
        return 'Network response was not ok';
      }

      const data: StarshipData = (await response.json()) as StarshipData;
      results.push(...data.results);
      nextUrl = data.next;
      localStorage.setItem('data-page-all', JSON.stringify(results));
    }
  }

  return results;
}

export default getAllStarships;
