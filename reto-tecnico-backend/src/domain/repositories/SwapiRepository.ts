import { TranslateRootResponse } from './model/TranslatedRootResponse';
import { TranslatedStarShipsResponse } from './model/TranslatedStarShipsResponse';

export interface SwapiRepository {
    getSwappiTranslatedRootResponse(): Promise<TranslateRootResponse>;
    getSwappiTranslatedStarShipsResponse(): Promise<TranslatedStarShipsResponse>;
}
