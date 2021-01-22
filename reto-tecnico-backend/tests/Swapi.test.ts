import { SwapiServiceImpl } from '../src/service/SwapiServiceImpl';

const swapiService = new SwapiServiceImpl();

describe('get swapi root data', () => {
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('should get the root swapi data translated', async () => {
    const response = await swapiService.getRootData();
    expect(response).toBeDefined();
  });
});


describe('get swapi star ships data', () => {
  // eslint-disable-next-line jest/prefer-expect-assertions
  it('should get the star ships swapi data translated', async () => {
    const response = await swapiService.getStarShipsData();
    expect(response).toBeDefined();
  });
});
