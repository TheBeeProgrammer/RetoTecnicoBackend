import { Employee } from './model/Employee';

export interface EmployeeRepository {
    getEmployee(): Promise<Employee>;

    createEmployee(employee: Employee): Promise<void>;


}
