import { APIGatewayProxyHandler } from 'aws-lambda';
import 'source-map-support/register';
import { echo } from '@lib/exampleQuery';
import { SwapiServiceImpl } from './service/SwapiServiceImpl';
// eslint-disable-next-line @typescript-eslint/no-unused-vars

const swappiServiceImpl = new SwapiServiceImpl();

export const hello: APIGatewayProxyHandler = async (event, _context) => ({
  statusCode: 200,
  body: JSON.stringify(
    {
      message: echo('Module aliasing is really the more best'),
      input: event,
    },
    null,
  ),
});

export const rootData: APIGatewayProxyHandler = async (event, context) => {
  console.log(event, 'event');
  console.log(context, 'context');

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

  const startShipsResponse = await swappiServiceImpl.getStarShipsData();

  return {
    statusCode: 200,
    body: JSON.stringify(
      startShipsResponse,
    ),
  };
};
