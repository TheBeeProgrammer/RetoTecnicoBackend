import { TranslateRootResponse } from '../domain/repositories/model/TranslatedRootResponse';
import { TranslatedStarShipsResponse } from '../domain/repositories/model/TranslatedStarShipsResponse';

export interface SwapiService {
    getRootData(): Promise<TranslateRootResponse>;

    getStarShipsData(): Promise<TranslatedStarShipsResponse>;
}
