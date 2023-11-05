import {
  MainPageState,
  SetMainPageState,
  Starship,
  StarshipData,
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
  const dataPageResults = localStorage.getItem('data-page');
  if (dataPageResults) {
    const dataPage: StarshipData = JSON.parse(dataPageResults);
    dataPage.results = updateFilteredResults;
    localStorage.setItem('data-page-filter', JSON.stringify(dataPage));
  }
};

export default updateFilteredResultsInStateAndStorage;
