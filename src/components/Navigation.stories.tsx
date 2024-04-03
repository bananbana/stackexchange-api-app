import Navigation, { NavigationProps } from "./Navigation";

export default {
  component: Navigation,
  title: "Navigation",
  tags: ["autodocs"],
};

const navigationProps: NavigationProps = {
  pageRows: 10,
  order: [
    { value: "desc", label: "Descending" },
    { value: "asc", label: "Ascending" },
  ],
  sortBy: [
    { value: "name", label: "Name" },
    { value: "popular", label: "Popularity" },
    { value: "activity", label: "Activity" },
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
