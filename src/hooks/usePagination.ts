const usePagination = (
  page: number,
  pageRows: number,
  setPage: (arg: number) => void,
  setPageRows: (arg: number) => void
) => {
  const changePage = (newPage: number) => {
    setPage(newPage);
  };

  const changePageRows = (rows: number) => {
    setPageRows(rows);
  };

  return {
    changePage,
    changePageRows,
  };
};

export default usePagination;
