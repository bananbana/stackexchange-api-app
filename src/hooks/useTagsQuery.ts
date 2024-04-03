import { toast } from "@/components/ui/useToast";
import { TagsQueryParams } from "@/types/TagsQueryParams";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTagsQuery = ({
  page,
  selectedOrder,
  sortedBy,
  pageRows,
}: TagsQueryParams) => {
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
        .catch((error) => {
          if (error.response && error.response.status) {
            toast({
              title: "Bad Request",
              description:
                "There was a bad request: " + error.response.data.error_message,
              variant: "destructive",
            });
          } else {
            throw error;
          }
        }),
  });
};

export default useTagsQuery;
