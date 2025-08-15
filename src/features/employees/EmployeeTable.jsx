import { useEmployees } from "./useEmployess";

function EmployeeTable() {
  const { isPending, employees } = useEmployees();

  if (isPending) return;

  console.log("EmployeesTable" + employees);

  return (
    <div>
      <h1>Employees Table</h1>
    </div>
  );
}

export default EmployeeTable;
