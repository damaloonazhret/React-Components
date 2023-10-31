import getStarshipsList from '../../api/getStarshipsList';
import { Starship } from '../../interfaces/interfaces';

const initStarships = async (): Promise<Array<object>[Starship]> => {
  const dataPage = localStorage.getItem('data-page');
  const dataPageFilter = localStorage.getItem('data-page-filter');

  if (dataPageFilter) {
    return JSON.parse(dataPageFilter);
  }
  if (dataPage) {
    return JSON.parse(dataPage);
  }
  return getStarshipsList();
};

export default initStarships;
