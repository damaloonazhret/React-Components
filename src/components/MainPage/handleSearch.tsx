import clearFilteredResults from './clearFilteredResults';
import filterResults from '../../utils/filterResults/filterResults';
import updateFilteredResultsInStateAndStorage from './updateFilteredResultsInStateAndStorage';
import { SearchButtonProps } from '../../interfaces/interfaces';

const handleSearch = (props: SearchButtonProps): void => {
  const { searchTerm, setState, state, results } = props;
  let { filteredResults } = props;
  if (searchTerm === '') {
    clearFilteredResults(setState, state);
  } else {
    filteredResults = filterResults(results, searchTerm);
    updateFilteredResultsInStateAndStorage(filteredResults, setState, state);
  }
};

export default handleSearch;
