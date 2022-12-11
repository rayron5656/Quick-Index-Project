import { Sign } from "./Sign";
import { TranslationParams } from "./TranslationParams";
import {Validation} from "./Validation";

export interface Word {
    _id : string
    spokenLanguageId: string;
    signLanguageId : string;
    definition : string;
    status : string;
    categories : string[];
    title : string;
    sign? : Sign;
    translationParams? : TranslationParams;
    validation : Validation
    updatedAt? : number;
    createdAt? : number;
    updatedBy? : string;
}
