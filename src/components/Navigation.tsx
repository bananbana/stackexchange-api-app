import { Options } from "@/types/Options";
import { Select } from "./Select";
import { Input } from "./ui/Input";

export interface NavigationProps {
  rowsPerPage: Options[];
  pageRows: number;
  setPageRows: (args: number) => void;
  order: Options[];
  selectedOrder: string;
  setSelectedOrder: (args: string) => void;
  sortBy: Options[];
  sortedBy: string;
  setSortedBy: (args: string) => void;
}

const Navigation = ({
  order,
  pageRows,
  rowsPerPage,
  setPageRows,
  selectedOrder,
  setSelectedOrder,
  sortBy,
  sortedBy,
  setSortedBy,
}: NavigationProps) => {
  return (
    <div className="flex gap-5 my-4 items-center">
      <label htmlFor="rows">Rows per page:</label>
      <div className="flex gap-2">
        <Input
          type="number"
          value={pageRows.toString()}
          onChange={(event) => setPageRows(parseInt(event.target.value))}
          className="w-20"
        />
        <Select
          placeholder="Rows per page"
          options={rowsPerPage}
          selected={pageRows.toString()}
          setSelected={(rows) => setPageRows(parseInt(rows))}
        />
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="sort">Sort: </label>
        <Select
          placeholder="Order by"
          options={order}
          selected={selectedOrder}
          setSelected={setSelectedOrder}
        />
        <Select
          placeholder="Sort by"
          options={sortBy}
          selected={sortedBy}
          setSelected={setSortedBy}
        />
      </div>
    </div>
  );
};

export default Navigation;
