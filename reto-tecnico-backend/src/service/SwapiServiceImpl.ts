import { SwapiService } from './SwapiService';
import { TranslateRootResponse } from '../domain/repositories/model/TranslatedRootResponse';
import { TranslatedStarShipsResponse } from '../domain/repositories/model/TranslatedStarShipsResponse';
import { SwapiRepositoryImpl } from '../integration/SwapiRepositoryImpl';


export class SwapiServiceImpl implements SwapiService {
  swappiRepository= new SwapiRepositoryImpl()

  // eslint-disable-next-line class-methods-use-this
  async getRootData(): Promise<TranslateRootResponse> {
    const translateRootResponse = await this.swappiRepository.getSwappiTranslatedRootResponse();
    console.log('Translated Response: ', translateRootResponse);
    return translateRootResponse;
  }

  async getStarShipsData(): Promise<TranslatedStarShipsResponse> {
    const translatedStartShipsResponse = await this.swappiRepository.getSwappiTranslatedStarShipsResponse();
    console.log('Translated StartShipsResponse: ', translatedStartShipsResponse);
    return translatedStartShipsResponse;
  }
}
