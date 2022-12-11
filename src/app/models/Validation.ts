import {Status} from "./status";


export interface Validation{
    [batchId : string] : {
        notes? : string;
        status : Status;
    }
}