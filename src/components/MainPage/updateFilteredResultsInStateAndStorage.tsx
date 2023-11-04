import {
  MainPageState,
  SetMainPageState,
  Starship,
} from '../../interfaces/interfaces';

const updateFilteredResultsInStateAndStorage = (
  updateFilteredResults: Array<Starship>,
  setState: SetMainPageState,
  state: MainPageState
): void => {
  setState({
    ...state,
    filteredResults: updateFilteredResults,
  });
  localStorage.setItem(
    'data-page-filter',
    JSON.stringify(updateFilteredResults)
  );
};

export default updateFilteredResultsInStateAndStorage;
