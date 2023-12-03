import {
  INITIAL_CURRENT_PAGE,
  INITIAL_ITEMS_COUNT,
} from '../../_constants_/constants';
import selectItemsOnPageData from '../selectItemsOnPage/selectItemsOnPageData';
import { MainPageAction } from '../../components/Actions/interfaces';
import ACTIONS from '../../components/Actions';

interface SetItemsOnPage {
  selectedValue: number;
  dispatch: React.Dispatch<MainPageAction>;
}

const setItemsOnPageChange = async ({
  selectedValue,
  dispatch,
}: SetItemsOnPage): Promise<void> => {
  dispatch({ type: ACTIONS.SET_IS_LOADING, payload: true });
  const fetchedData = await selectItemsOnPageData(selectedValue);
  if (typeof fetchedData === 'object' && fetchedData) {
    localStorage.clear();
    dispatch({ type: ACTIONS.SET_IS_LOADING, payload: false });
    dispatch({ type: ACTIONS.SET_ITEMS_ON_PAGE, payload: selectedValue });
    dispatch({ type: ACTIONS.SET_CURRENT_PAGE, payload: INITIAL_CURRENT_PAGE });
    dispatch({
      type: ACTIONS.SET_ITEMS_COUNT,
      payload: fetchedData.count || INITIAL_ITEMS_COUNT,
    });
    dispatch({ type: ACTIONS.SET_RESULTS, payload: fetchedData.results });
  }
};

export default setItemsOnPageChange;
