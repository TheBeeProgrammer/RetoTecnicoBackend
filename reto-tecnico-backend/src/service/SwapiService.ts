// eslint-disable-next-line import/extensions
import { TranslateRootResponse } from '../domain/repositories/model/TranslatedRootResponse';
// eslint-disable-next-line import/extensions
import { TranslatedStarShipsResponse } from '../domain/repositories/model/TranslatedStarShipsResponse';

export interface SwapiService {
    getRootData(): Promise<TranslateRootResponse>;

    getStarShipsData(): Promise<TranslatedStarShipsResponse>;
}
