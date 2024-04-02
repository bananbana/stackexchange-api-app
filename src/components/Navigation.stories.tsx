import Navigation, { NavigationProps } from "./Navigation";

export default {
  component: Navigation,
  title: "Navigation",
  tags: ["autodocs"],
};

const navigationProps: NavigationProps = {
  rowsPerPage: [
    { value: "15", label: "15" },
    { value: "25", label: "25" },
    { value: "50", label: "50" },
    { value: "100", label: "100" },
  ],
  pageRows: 10,
  order: [
    { value: "desc", label: "desc" },
    { value: "asc", label: "asc" },
  ],
  sortBy: [
    { value: "name", label: "name" },
    { value: "popular", label: "popular" },
    { value: "activity", label: "activity" },
  ],
  selectedOrder: "desc",
  sortedBy: "name",
  setPageRows: (pageRows: number) => {
    console.log(pageRows);
  },
  setSelectedOrder: (order: string) => {
    console.log(order);
  },
  setSortedBy: (args: string) => {
    console.log(args);
  },
};

export const Default = {
  args: {
    ...navigationProps,
  },
};
