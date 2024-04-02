import { toast } from "@/components/ui/useToast";
import { useQueryClient } from "@tanstack/react-query";

const useSearch = () => {
  const queryClient = useQueryClient();

  const search = async () => {
    try {
      await queryClient.refetchQueries({ queryKey: ["tags"] });
    } catch (error) {
      toast({
        title: "There was an error fetching data",
        variant: "destructive",
      });
    }
  };
  return { search };
};
export default useSearch;
