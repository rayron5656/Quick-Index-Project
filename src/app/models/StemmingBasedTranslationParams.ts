import { TranslationParams } from "./TranslationParams";


export interface StemmingBasedTranslationParams extends TranslationParams {
    type: 'stemming-based';
    variations: string[];
    baseForm: string;
}
