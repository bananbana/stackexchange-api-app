/* eslint-disable @typescript-eslint/no-empty-function */
import { Select, SelectProps } from "./Select";

export default {
  component: Select,
  title: "Select",
  tags: ["autodocs"],
};

const selectProps: SelectProps = {
  options: [
    { value: "name", label: "Name" },
    { value: "popular", label: "Popularity" },
    { value: "activity", label: "Activity" },
  ],
  selected: " ",
  setSelected: () => {},
  placeholder: "",
};

export const Default = {
  args: {
    ...selectProps,
  },
};

export const Selected = {
  args: {
    ...selectProps,
    selected: "name",
  },
};
