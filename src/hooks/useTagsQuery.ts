import { toast } from "@/components/ui/useToast";
import { QueryParams } from "@/types/QueryParams";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTagsQuery = ({
  page,
  selectedOrder,
  sortedBy,
  pageRows,
}: QueryParams) => {
  return useQuery({
    queryKey: ["tags"],
    queryFn: () =>
      axios
        .get(`https://api.stackexchange.com/2.3/tags?site=stackoverflow`, {
          params: {
            key: import.meta.env.VITE_KEY,
            filter: "!21k7qaosV)V8xwT9vCU*6",
            page: page,
            order: selectedOrder,
            sort: sortedBy,
            pagesize: pageRows,
          },
        })
        .then((res) => res.data)
        .catch(() => {
          toast({
            title: "There was an error fetching data",
            variant: "destructive",
          });
          throw new Error("There was an error fetching data");
        }),
  });
};

export default useTagsQuery;
