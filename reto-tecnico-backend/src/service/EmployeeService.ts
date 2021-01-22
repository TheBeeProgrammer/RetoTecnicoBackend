import { Employee } from '../domain/repositories/model/Employee';

export interface EmployeeService {
    saveEmployee(employee: Employee): Promise<void>;

    getEmployee(dni: string): Promise<Employee>;
}
