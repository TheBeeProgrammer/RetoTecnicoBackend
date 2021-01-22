import { TranslateRootResponse } from './model/TranslatedRootResponse';
import { TranslatedStarShipsResponse } from './model/TranslatedStarShipsResponse';

export interface SwapiRepository {
    getSwapiTranslatedRootResponse(): Promise<TranslateRootResponse>;
    getSwapiTranslatedStarShipsResponse(): Promise<TranslatedStarShipsResponse>;
}
