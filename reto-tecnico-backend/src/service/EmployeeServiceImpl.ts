// eslint-disable-next-line import/named
import { EmployeeService } from './EmployeeService';
import { Employee } from '../domain/repositories/model/Employee';
// eslint-disable-next-line import/namespace,import/named
import { EmployeeRepositoryImpl } from '../integration/EmployeeRepositoryImpl';

export class EmployeeServiceImpl implements EmployeeService {
    employeeRepository = new EmployeeRepositoryImpl()

    async saveEmployee(employee: Employee): Promise<void> {
      if (employee.dni.length !== 8) throw new Error('DNI INVALIDO');
      await this.employeeRepository.createEmployee(employee);
    }

    async getEmployeeByDni(dni: string): Promise<Employee> {
      if (dni.length !== 8) throw new Error('DNI INVALIDO');
      const employee = await this.employeeRepository.getEmployee(dni);
      return employee;
    }
}
