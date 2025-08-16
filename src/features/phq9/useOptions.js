import { useQuery } from "@tanstack/react-query";
import { getOptions } from "../../services/apiOptions";

export default function useOptions() {
  const {
    isPending,
    data: options,
    error,
  } = useQuery({
    queryKey: ["options"],
    queryFn: getOptions,
  });

  return { isPending, options, error };
}
