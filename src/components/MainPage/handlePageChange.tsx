import selectPage from '../../utils/selectPage';
import { PaginationActionProps } from '../../_interfaces_/interfaces';
import { ACTIONS } from '../MainPageContext/MainPageProvider/MainPageProvider';

const handlePageChange: (props: PaginationActionProps) => void = async ({
  pageNumber,
  navigate,
  itemsOnPage,
  dispatch,
}) => {
  dispatch({ type: ACTIONS.SET_IS_LOADING, payload: true });
  const page = await selectPage(pageNumber, itemsOnPage);
  dispatch({ type: ACTIONS.SET_IS_LOADING, payload: false });
  dispatch({ type: ACTIONS.SET_RESULTS, payload: page });
  dispatch({ type: ACTIONS.SET_CURRENT_PAGE, payload: pageNumber });
  navigate(`/page/${pageNumber}`);
};

export default handlePageChange;
