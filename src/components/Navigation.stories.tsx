/* eslint-disable @typescript-eslint/no-empty-function */
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
  setPageRows: () => {},
  setSelectedOrder: () => {},
  setSortedBy: () => {},
};

export const Default = {
  args: {
    ...navigationProps,
  },
};
