import { Tag } from "@/types/Tag";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Tag>[] = [
  {
    id: "name",
    accessorKey: "name",
    header: "Name",
  },
  {
    id: "count",
    accessorKey: "count",
    header: "Related Posts",
    cell: ({ row }) => {
      return <p className="pl-2">{row.getValue("count")}</p>;
    },
  },
  {
    id: "activity",
    accessorKey: "last_activity_date",
    header: "Last Activity",
    cell: (info) => {
      const timestamp = info.getValue() as number;
      if (!timestamp) {
        return null;
      }
      const date = new Date(timestamp * 1000);
      const formattedDate = date.toISOString().split("T")[0];

      const formattedTime = date.toTimeString().split(" ")[0];
      return `${formattedDate} ${formattedTime}`;
    },
  },
];
