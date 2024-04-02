import { Page } from "@/types/Page";
import { Paginator } from "./Paginator";
import { Tag } from "@/types/Tag";

export default {
  component: Paginator,
  title: "Pagination",
  tags: ["autodocs"],
};

const tagsData: Page<Tag> = {
  items: [
    {
      count: 0,
      last_activity_date: 1626894009,
      name: "announcement",
    },
    {
      count: 1231,
      last_activity_date: 1626894009,
      name: "typescript",
    },
    {
      count: 100,
      last_activity_date: 1626334009,
      name: "java",
    },
    {
      count: 231,
      last_activity_date: 1622894009,
      name: "zustand",
    },
  ],
  has_more: true,
  page: 1,
  page_size: 25,
  quota_max: 10000,
  quota_remaining: 9952,
  total: 65684,
};

export const Default = {
  args: {
    data: tagsData,
    currentPage: 1,
    setCurrentPage: (args: number) => {
      args;
    },
  },
};
