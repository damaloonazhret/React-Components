import selectPage from '../../utils/selectPage';
import { MainPageState, SetMainPageState } from '../../interfaces/interfaces';

const handlePageChange = async (
  pageNumber: number,
  setState: SetMainPageState,
  state: MainPageState
): Promise<void> => {
  setState((prevState) => ({
    ...prevState,
    isLoading: true,
  }));
  const page = await selectPage(pageNumber, state.itemsOnPage);
  setState((prevState) => ({
    ...prevState,
    isLoading: false,
    results: page,
    currentPage: pageNumber,
  }));
};

export default handlePageChange;
