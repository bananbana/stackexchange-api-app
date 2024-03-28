import { TagsType } from "@/types/TagsType";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<TagsType>[] = [
  {
    id: "name",
    accessorKey: "name",
    header: "Name",
  },
  { id: "count", accessorKey: "count", header: "Count" },
  {
    id: "activity",
    accessorKey: "last_activity_date",
    header: "Last Activity",
    cell: (info) => {
      const timestamp = info.getValue() as number;
      const date = new Date(timestamp * 1000);
      const formattedDate = date.toISOString().split("T")[0];

      const formattedTime = date.toTimeString().split(" ")[0];
      return `${formattedDate} ${formattedTime}`;
    },
  },
];
