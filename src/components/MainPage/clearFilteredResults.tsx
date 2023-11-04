import { MainPageState, SetMainPageState } from '../../interfaces/interfaces';

const clearFilteredResults = (
  setState: SetMainPageState,
  state: MainPageState
): void => {
  setState({
    ...state,
    filteredResults: [],
  });
  localStorage.removeItem('data-page-filter');
};

export default clearFilteredResults;
