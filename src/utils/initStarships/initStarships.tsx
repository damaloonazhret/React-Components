import getStarshipsList from '../../api/getStarshipsList';
import { StarshipData } from '../../interfaces/interfaces';

const initStarships = async (
  pageNumber: number,
  currentPage: number,
  limit = 5
): Promise<StarshipData> => {
  const dataPage = localStorage.getItem('data-page');

  let data;

  if (dataPage) {
    data = JSON.parse(dataPage);
  } else {
    data = await getStarshipsList();
    if (data) {
      if (typeof data === 'object') {
        const limitedResults = data.results.slice(0, limit);
        const dataCopy = { ...data };
        dataCopy.results = limitedResults;
        data = dataCopy;
        localStorage.setItem('data-page', JSON.stringify(data));
      }
    }
  }

  return data;
};

export default initStarships;
