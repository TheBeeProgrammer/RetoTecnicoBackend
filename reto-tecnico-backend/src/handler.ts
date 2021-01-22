import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { SwapiServiceImpl } from './service/SwapiServiceImpl';
import { EmployeeServiceImpl } from './service/EmployeeServiceImpl';
import { Employee } from './domain/repositories/model/Employee';

export const rootData: APIGatewayProxyHandler = async (event, context) => {
  console.log(event, 'event');
  console.log(context, 'context');
  const swappiServiceImpl = new SwapiServiceImpl();
  const rootDataResponse = await swappiServiceImpl.getRootData();

  return {
    statusCode: 200,
    body: JSON.stringify(
      rootDataResponse,
    ),
  };
};

export const starShips: APIGatewayProxyHandler = async (event, context) => {
  console.log(event, 'event');
  console.log(context, 'context');
  const swappiServiceImpl = new SwapiServiceImpl();
  const startShipsResponse = await swappiServiceImpl.getStarShipsData();

  return {
    statusCode: 200,
    body: JSON.stringify(
      startShipsResponse,
    ),
  };
};

export const employeeCreate: APIGatewayProxyHandler = async (event) => {
  console.log(event, 'event');
  const employeeServiceImpl = new EmployeeServiceImpl();
  if (event.body == null) throw new Error('BODY IS EMPTY');
  await employeeServiceImpl.saveEmployee(JSON.parse(event.body) as Employee);
  const response = { Message: 'success', Code: '200' };
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};

export const getEmployee: APIGatewayProxyHandler = async (event) => {
  console.log(event, 'event');
  const employeeServiceImpl = new EmployeeServiceImpl();

  if (event.pathParameters == null) throw new Error('EMPTY PATH PARAM');
  const employeeResponse = await employeeServiceImpl.getEmployee(event.pathParameters.dni);
  return {
    statusCode: 200,
    body: JSON.stringify(
      employeeResponse,
    ),
  };
};
