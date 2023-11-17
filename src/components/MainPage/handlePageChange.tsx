import selectPage from '../../utils/selectPage';
import { PaginationActionProps } from '../../interfaces/interfaces';

const handlePageChange: (props: PaginationActionProps) => void = async ({
  pageNumber,
  setIsLoading,
  setResults,
  setCurrentPage,
  itemsOnPage,
  navigate,
}) => {
  setIsLoading(true);
  const page = await selectPage(pageNumber, itemsOnPage);
  setIsLoading(false);
  setResults(page);
  setCurrentPage(pageNumber);
  navigate(`/page/${pageNumber}`);
};

export default handlePageChange;
