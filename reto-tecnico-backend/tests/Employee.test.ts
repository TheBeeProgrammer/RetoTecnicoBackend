import { EmployeeServiceImpl } from '../src/service/EmployeeServiceImpl';
import { Employee } from '../src/domain/repositories/model/Employee';

const employeeService = new EmployeeServiceImpl();

describe('get employee', () => {
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('should take the dni employee and return an Employee', async () => {
    const response = await employeeService.getEmployee('12345678');
    expect(response).toBeDefined();
  });
});

describe('create employee', () => {
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('register an employee and save in DynamoDb', async () => {
    const employee = {
      dni: '12345679',
      name: 'Renato',
      surname: 'Garces',
      employeeCode: '123456789',
    } as Employee;
    const response = await employeeService.saveEmployee(employee);
    expect(response).toBeUndefined();
  });
});
