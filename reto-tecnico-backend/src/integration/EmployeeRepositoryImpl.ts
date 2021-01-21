import aws from 'aws-sdk';
import { EmployeeRepository } from '../domain/repositories/EmployeeRepository';
import { Employee } from '../domain/repositories/model/Employee';


export class EmployeeRepositoryImpl implements EmployeeRepository {
    documentClient = new aws.DynamoDB.DocumentClient();

    async createEmployee(employee: Employee): Promise<void> {
      const params = {
        TableName: 'employee',
        Item: employee,
      };
      const data = await this.documentClient.put(params).promise();
      console.log(data);
    }

    // eslint-disable-next-line class-methods-use-this
    getEmployee(): Promise<Employee> {
      return Promise.resolve(undefined);
    }
}
