// eslint-disable-next-line import/extensions
import { TranslateRootResponse } from './model/TranslatedRootResponse';
// eslint-disable-next-line import/namespace,import/named,import/extensions
import { TranslatedStarShipsResponse } from './model/TranslatedStarShipsResponse';

export interface SwapiRepository {
    getSwappiTranslatedRootResponse(): Promise<TranslateRootResponse>;
    getSwappiTranslatedStarShipsResponse(): Promise<TranslatedStarShipsResponse>;
}
