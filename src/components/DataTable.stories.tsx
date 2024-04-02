import { DataTable, DataTableProps } from "./DataTable";
import { Tag } from "@/types/Tag";
import { Page } from "@/types/Page";
import { columns } from "@/columns";

export default {
  component: DataTable,
  title: "DataTable",
  tags: ["autodocs"],
};

const dataTableProps = {
  columns: columns,
  data: [
    {
      last_activity_date: 1711536795,
      count: 2528629,
      name: "javascript",
    },
    {
      last_activity_date: 1711537130,
      count: 2191827,
      name: "python",
    },
    {
      last_activity_date: 1711536816,
      count: 1917162,
      name: "java",
    },
    {
      last_activity_date: 1711536761,
      count: 1614861,
      name: "c#",
    },
    {
      last_activity_date: 1711537030,
      count: 1464361,
      name: "php",
    },
    {
      last_activity_date: 1711536188,
      count: 1417127,
      name: "android",
    },
    {
      last_activity_date: 1711537077,
      count: 1187277,
      name: "html",
    },
    {
      last_activity_date: 1711536623,
      count: 1034833,
      name: "jquery",
    },
    {
      last_activity_date: 1711536586,
      count: 806655,
      name: "c++",
    },
    {
      last_activity_date: 1711536906,
      count: 804152,
      name: "css",
    },
    {
      last_activity_date: 1711537014,
      count: 687202,
      name: "ios",
    },
    {
      last_activity_date: 1711536856,
      count: 670663,
      name: "sql",
    },
    {
      last_activity_date: 1711537130,
      count: 662005,
      name: "mysql",
    },
    {
      last_activity_date: 1711535110,
      count: 505430,
      name: "r",
    },
    {
      last_activity_date: 1711536699,
      count: 476517,
      name: "reactjs",
    },
  ],
  isLoading: false,
};

export const Default = {
  args: {
    columns: columns,
    data: dataTableProps.data,
    isLoading: false,
  },
};

export const Loading = {
  args: {
    columns: columns,
    data: null,
    isLoading: true,
  },
};

export const NoResults = {
  args: {
    columns: columns,
    data: [],
    isLoading: false,
  },
};
