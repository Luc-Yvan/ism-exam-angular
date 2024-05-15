import { Observable } from "rxjs";
import { RestResponse } from "../../models/rest.response";
import { InscriptionListe } from "../../models/inscription.liste";
import { RestInscription } from "../../models/rest.inscription";

export interface InscritsService{
    findAll(page: number,idSession:string|null,classe: string):Observable<RestInscription<InscriptionListe[]>>;
}