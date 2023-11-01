import getStarshipsList from '../../api/getStarshipsList';
import { Starship } from '../../interfaces/interfaces';

const initStarships = async (): Promise<Starship[]> => {
  const dataPage = localStorage.getItem('data-page');
  const dataPageFilter = localStorage.getItem('data-page-filter');

  let results;

  if (dataPageFilter) {
    results = JSON.parse(dataPageFilter);
  } else if (dataPage) {
    results = JSON.parse(dataPage);
  } else {
    results = await getStarshipsList();
  }

  return results;
};

export default initStarships;
