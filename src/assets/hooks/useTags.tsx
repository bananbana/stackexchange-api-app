import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useTags = () => {
  const tagsQuery = useQuery({
    queryKey: ["tags-def"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://api.stackexchange.com/2.3/tags?order=asc&sort=popular&site=stackoverflow"
      );
      return { tagsDefOrder: data };
    },
  });
  return {
    tagsDefOrder: tagsQuery.data?.tagsDefOrder,
  };
};

export default useTags;
