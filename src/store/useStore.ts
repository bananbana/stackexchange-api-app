import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type AppState = {
  page: number;
  selectedOrder: string;
  sortedBy: string;
  pageRows: number;
  setSelectedOrder: (args: string) => void;
  setPage: (args: number) => void;
  setSortedBy: (args: string) => void;
  setPageRows: (args: number) => void;
};

const useStore = create(
  persist<AppState>(
    (set) => ({
      selectedOrder: "desc",
      sortedBy: "name",
      page: 1,
      pageRows: 15,
      setSelectedOrder: (order: string) => {
        console.log("order", order);
        set({
          selectedOrder: order,
        });
      },
      setPage: (page: number) => {
        console.log("page", page);
        set({
          page,
        });
      },
      setSortedBy: (sorted: string) =>
        set({
          sortedBy: sorted,
        }),
      setPageRows: (rows: number) =>
        set({
          pageRows: rows,
        }),
    }),
    {
      name: "stackexchange-app-tags",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useStore;
