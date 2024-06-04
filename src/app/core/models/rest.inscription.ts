import { ClasseListe } from "./classe.list";
import { RestResponse } from "./rest.response";

export interface RestInscription<T> extends RestResponse<T>{
    classes:ClasseListe[]
}