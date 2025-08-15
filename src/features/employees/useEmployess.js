import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "../../services/apiEmployees";

export function useEmployees() {
  // use react query
  const {
    isPending,
    data: employees,
    error,
  } = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
  });
  console.log("useEmployees " + { employees });

  return { isPending, employees, error };
}
