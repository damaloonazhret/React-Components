import getStarshipsList from '../../api/getStarshipsList';
import { LocalStorageKeys } from '../../_interfaces_/interfaces';
import { StarshipData } from '../../_interfaces_/globalInterfaces';

const selectItemsOnPageData = async (
  limit: number
): Promise<StarshipData | string | null> => {
  let data = (await getStarshipsList()) as StarshipData;
  if (typeof data === 'object' && data) {
    const limitedResults = data.results.slice(0, limit);
    const dataCopy = { ...data };
    dataCopy.results = limitedResults;
    data = dataCopy;
    localStorage.setItem(LocalStorageKeys.DataPage, JSON.stringify(data));
    return data;
  }
  return data;
};
export default selectItemsOnPageData;
