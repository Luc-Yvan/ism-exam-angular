import { Observable } from "rxjs";
import { InscriptionCreate, InscriptionListe } from "../models/inscription.list";
import { RestInscription } from "../models/rest.inscription";
import { RestResponse } from "../models/rest.response";

export interface InscritsService {
    findAll(page: number,idSession:string|null,classe: string):Observable<RestInscription<InscriptionListe[]>>;
    create(inscriptionCreate: InscriptionCreate): Observable<RestResponse<InscriptionCreate>>;

}
