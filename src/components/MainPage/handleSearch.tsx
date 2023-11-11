import clearFilteredResults from './clearFilteredResults';
import filterResults from '../../utils/filterResults/filterResults';
import updateFilteredResultsInStateAndStorage from './updateFilteredResultsInStateAndStorage';
import { MainPageState, SetMainPageState } from '../../interfaces/interfaces';

const handleSearch = (
  searchTerm: string,
  setState: SetMainPageState,
  state: MainPageState
): void => {
  let { filteredResults } = state;
  const { results } = state;
  if (searchTerm === '') {
    clearFilteredResults(setState, state);
  } else {
    filteredResults = filterResults(results, searchTerm);
    updateFilteredResultsInStateAndStorage(filteredResults, setState, state);
  }
};

export default handleSearch;
