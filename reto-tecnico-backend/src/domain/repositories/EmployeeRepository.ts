import { Employee } from './model/Employee';

export interface EmployeeRepository {
    getEmployeeByDni(dni: string): Promise<Employee>;

    createEmployee(employee: Employee): Promise<void>;


}
