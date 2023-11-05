import getStarshipsList from '../../api/getStarshipsList';
import { StarshipData } from '../../interfaces/interfaces';

const initStarships = async (limit = 10): Promise<StarshipData> => {
  const dataPage = localStorage.getItem('data-page');
  const dataPageFilter = localStorage.getItem('data-page-filter');

  let data;

  if (dataPageFilter) {
    data = JSON.parse(dataPageFilter);
  } else if (dataPage) {
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
