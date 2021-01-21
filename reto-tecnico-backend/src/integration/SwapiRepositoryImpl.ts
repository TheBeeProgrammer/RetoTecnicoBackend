import axios from 'axios';
import { SwapiRepository } from '../domain/repositories/SwapiRepository';
import { RootResponse } from '../domain/repositories/model/RootResponse';
import { TranslateRootResponse } from '../domain/repositories/model/TranslatedRootResponse';
import { TranslatedStarShipsResponse } from '../domain/repositories/model/TranslatedStarShipsResponse';
import { StarShipsResponse } from '../domain/repositories/model/StarShipsResponse';

export class SwapiRepositoryImpl implements SwapiRepository {
    private readonly ROOT_API_URL = 'https://swapi.py4e.com/api/'

    /** retorna los valores traducidos del response del api base
     * se mapea los valores originales y luego se retorna un modelo con los valores traducidos
     */
    async getSwappiTranslatedRootResponse(): Promise<TranslateRootResponse> {
      try {
        const axiosResponse = await axios.get(this.ROOT_API_URL);
        const response = axiosResponse.data as RootResponse;
        return new TranslateRootResponse(response.films,
          response.planets,
          response.people,
          response.species,
          response.vehicles,
          response.starships);
      } catch (error) {
        throw new Error(error);
      }
    }

    /** retorna los valores traducidos del response del api StarShips
     * se mapea los valores originales y luego se retorna un modelo con los valores traducidos
     */
    // eslint-disable-next-line class-methods-use-this
    async getSwappiTranslatedStarShipsResponse(): Promise<TranslatedStarShipsResponse> {
      try {
        const axiosResponse = await axios.get(`${this.ROOT_API_URL}starships/${9}`);
        const response = axiosResponse.data as StarShipsResponse;
        return new TranslatedStarShipsResponse(response.name, response.model, response.manufacturer,
          response.cost_in_credits, response.length, response.max_atmosphering_speed,
          response.crew, response.passengers, response.cargo_capacity, response.consumables, response.hyperdrive_rating,
          response.MGLT, response.starship_class, response.pilots, response.films, response.created, response.edited,
          response.url);
      } catch (error) {
        throw new Error(error);
      }
    }
}
