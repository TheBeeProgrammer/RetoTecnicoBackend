import { Employee } from './model/Employee';

export interface EmployeeRepository {
    getEmployee(dni: string): Promise<Employee>;

    createEmployee(employee: Employee): Promise<void>;


}
