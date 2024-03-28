import { useState } from "react";
import ListboxBox from "./ListboxBox";
import { Input } from "./ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
const order = [{ name: "desc" }, { name: "asc" }];
const sortBy = [{ name: "name" }, { name: "popularity" }, { name: "activity" }];

const Navigation = () => {
  const [selectedOrder, setSelectedOrder] = useState(order[0]);
  const [sortedBy, setSortedBy] = useState(sortBy[0]);
  return (
    <div className="grid grid-cols-3 gap-5 mb-6">
      <div className="flex items-center">
        <label htmlFor="rows" className="w-full">
          Rows per page:{" "}
        </label>
        <Input id="rows" placeholder="rows" type="number" />
      </div>
      <div className="flex items-center gap-2">
        <label>Sort: </label>
        <ListboxBox
          options={order}
          selected={selectedOrder}
          setSelected={setSelectedOrder}
        />
        <ListboxBox
          options={sortBy}
          selected={sortedBy}
          setSelected={setSortedBy}
        />
      </div>
      <Button>Search</Button>
    </div>
  );
};

export default Navigation;
