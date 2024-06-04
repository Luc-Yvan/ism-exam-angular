import { Observable } from "rxjs";
import { RestResponse } from "../models/rest.response";
import { SessionListe } from "../models/session.list";

export interface SessionService {
    findAll(page:number,idCours:string|null):Observable<RestResponse<SessionListe[]>>;
}
