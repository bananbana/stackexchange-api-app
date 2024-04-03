import { Option } from "@/types/Option";
import { Select } from "./Select";
import { Input } from "./ui/Input";

export interface NavigationProps {
  pageRows: number;
  setPageRows: (args: number) => void;
  order: Option[];
  selectedOrder: string;
  setSelectedOrder: (args: string) => void;
  sortBy: Option[];
  sortedBy: string;
  setSortedBy: (args: string) => void;
}

const Navigation = ({
  order,
  pageRows,
  setPageRows,
  selectedOrder,
  setSelectedOrder,
  sortBy,
  sortedBy,
  setSortedBy,
}: NavigationProps) => {
  return (
    <div className="flex gap-5 my-4 items-center justify-between">
      <div className="flex items-center gap-2">
        <label htmlFor="sort">Sort: </label>
        <Select
          placeholder="Sort by"
          options={sortBy}
          selected={sortedBy}
          setSelected={setSortedBy}
        />
        <Select
          placeholder="Order by"
          options={order}
          selected={selectedOrder}
          setSelected={setSelectedOrder}
        />
      </div>
      <div className="w-fit">
        <div className="flex gap-2 items-center">
          <label htmlFor="rows">Rows per page:</label>
          <Input
            max={100}
            type="number"
            value={pageRows.toString()}
            onChange={(event) => setPageRows(parseInt(event.target.value))}
            className="w-16"
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
