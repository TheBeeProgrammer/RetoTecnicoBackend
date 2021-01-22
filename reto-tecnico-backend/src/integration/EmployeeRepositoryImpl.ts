import aws from 'aws-sdk';
import { EmployeeRepository } from '../domain/repositories/EmployeeRepository';
import { Employee } from '../domain/repositories/model/Employee';


export class EmployeeRepositoryImpl implements EmployeeRepository {
    documentClient = new aws.DynamoDB.DocumentClient({ region: 'us-east-1' });


    async createEmployee(employee: Employee): Promise<void> {
      const params = {
        TableName: 'employee',
        Item: employee,
      };
      const data = await this.documentClient.put(params).promise();
      console.log(data);
    }

    async getEmployee(dni: string): Promise<Employee> {
      const params = {
        TableName: 'employee',
        KeyConditionExpression: 'dni = :dni',
        ExpressionAttributeValues: {
          ':dni': dni,
        },
      };
      const data = await this.documentClient.query(params).promise();
      if (data.Items[0] === null || data.Items[0] === undefined) throw new Error('EMPLOYEE NOT FOUND');
      return data.Items[0] as Employee;
    }
}
