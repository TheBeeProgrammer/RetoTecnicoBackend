// eslint-disable-next-line import/named
import { EmployeeService } from './EmployeeService';
import { Employee } from '../domain/repositories/model/Employee';
import { EmployeeRepositoryImpl } from '../integration/EmployeeRepositoryImpl';

export class EmployeeServiceImpl implements EmployeeService {
    employeeRepository = new EmployeeRepositoryImpl()

    async saveEmployee(employee: Employee): Promise<void> {
      if (employee.dni.length > 8 || employee.dni.length < 8) throw new Error('DNI INVALIDO');
      await this.employeeRepository.createEmployee(employee);
    }
}
