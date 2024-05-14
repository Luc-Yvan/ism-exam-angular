import { Observable } from "rxjs";
import { RestResponse } from "../../models/rest.response";
import { InscriptionListe } from "../../models/inscription.liste";

export interface InscritsService{
    findAll(page:number,classe:string):Observable<RestResponse<InscriptionListe[]>>;
}