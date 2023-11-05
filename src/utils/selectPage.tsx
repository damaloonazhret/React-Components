import { Starship } from '../interfaces/interfaces';
import getPage from '../api/getPage';

async function selectPage(
  pageNumber: number,
  limit: number = 5
): Promise<Starship[]> {
  const itemsPerPage = limit === 10 ? 10 : 5;
  const pageToFetch = Math.ceil((pageNumber * itemsPerPage) / 10);

  const data = await getPage(pageToFetch);

  if (Array.isArray(data)) {
    const start = ((pageNumber - 1) * itemsPerPage) % 10;
    const end = start + itemsPerPage;
    const selectedResults = data.slice(start, end);
    return selectedResults;
  }

  return [];
}

export default selectPage;
