import { Starship } from '../../interfaces/interfaces';

const filterResults = (
  results: Array<Starship>,
  searchTerm: string
): Array<Starship> => {
  return results.filter((result: Starship) =>
    result.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export default filterResults;
