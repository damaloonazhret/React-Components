import { Starship } from '../../_interfaces_/globalInterfaces';

const filterResults = (
  results: Array<Starship>,
  searchTerm: string
): Array<Starship> => {
  return results.filter((result: Starship) =>
    result.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export default filterResults;
