import "./index.css";
import { columns } from "./columns";
import { DataTable } from "./components/DataTable";
import { useEffect } from "react";
import Navigation from "./components/Navigation";
import { Paginator } from "./components/Paginator";
import useStore from "./store/useStore";
import useTagsQuery from "./hooks/useTagsQuery";
import usePagination from "./hooks/usePagination";
import useSearch from "./hooks/useSearch";

const order = [
  { value: "desc", label: "Descending" },
  { value: "asc", label: "Ascending" },
];
const sortBy = [
  { value: "name", label: "Name" },
  { value: "popular", label: "Popularity" },
  { value: "activity", label: "Activity" },
];
const rowsPerPage = [
  { value: "15", label: "15" },
  { value: "25", label: "25" },
  { value: "50", label: "50" },
  { value: "100", label: "100" },
];

function App() {
  const [selectedOrder, setSelectedOrder] = useStore((state) => [
    state.selectedOrder,
    state.setSelectedOrder,
  ]);
  const [sortedBy, setSortedBy] = useStore((state) => [
    state.sortedBy,
    state.setSortedBy,
  ]);
  const [pageRows, setPageRows] = useStore((state) => [
    state.pageRows,
    state.setPageRows,
  ]);
  const [page, setPage] = useStore((state) => [state.page, state.setPage]);
  const { changePage, changePageRows } = usePagination(
    page,
    pageRows,
    setPage,
    setPageRows
  );
  const { data, isLoading } = useTagsQuery({
    page,
    selectedOrder,
    sortedBy,
    pageRows,
  });
  const { search } = useSearch();

  useEffect(() => {
    search();
  }, [page, pageRows, selectedOrder, sortedBy]);

  return (
    <div className="p-2 w-3/5 mx-auto">
      <Navigation
        order={order}
        sortedBy={sortedBy}
        pageRows={pageRows}
        rowsPerPage={rowsPerPage}
        setPageRows={changePageRows}
        selectedOrder={selectedOrder}
        setSelectedOrder={setSelectedOrder}
        sortBy={sortBy}
        setSortedBy={setSortedBy}
      />
      <DataTable
        columns={columns}
        data={data ? data.items : []}
        isLoading={isLoading}
      />
      {data?.has_more && (
        <Paginator data={data} currentPage={page} setCurrentPage={changePage} />
      )}
    </div>
  );
}
export default App;
