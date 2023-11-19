import {
  DEFAULT_ITEMS_ON_PAGE,
  INITIAL_ITEMS_ON_PAGE,
  MAX_ITEMS_ON_PAGE,
  MIN_ITEMS_ON_PAGE,
} from '../../_constants_/constants';
import { Starship } from '../../_interfaces_/globalInterfaces';
import getPage from '../../api/getPage';

async function SelectPage(
  pageNumber: number,
  limit: number = INITIAL_ITEMS_ON_PAGE
): Promise<Starship[]> {
  const itemsPerPage =
    limit === MAX_ITEMS_ON_PAGE ? MAX_ITEMS_ON_PAGE : MIN_ITEMS_ON_PAGE;
  const pageToFetch = Math.ceil(
    (pageNumber * itemsPerPage) / DEFAULT_ITEMS_ON_PAGE
  );
  const data = await getPage(pageToFetch);
  // const { data } = useGetStarshipsByPageQuery(pageToFetch);

  if (Array.isArray(data)) {
    const start = ((pageNumber - 1) * itemsPerPage) % DEFAULT_ITEMS_ON_PAGE;
    const end = start + itemsPerPage;
    const selectedResults = data.slice(start, end);
    return selectedResults;
  }

  return [];
}

export default SelectPage;
