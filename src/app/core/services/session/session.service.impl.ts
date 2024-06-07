import { Observable } from "rxjs";
import { RestResponse } from "../../models/rest.response";
import { SalleCreate, SalleListe } from "../../models/salle.list";
import { Injectable } from "@angular/core";
import { environment } from "../../../environnements/environment.development";
import { HttpClient } from "@angular/common/http";
import { SessionService } from "./session.service";
import { SessionCreate, SessionListe } from "../../models/session.list";

@Injectable({
    providedIn: 'root'
  })
export class SessionServiceImpl implements SessionService {
    private apiUrl=`${environment.APIURL}/sessions`

    constructor(private http:HttpClient) { }
    create(sessionCreate: SessionCreate): Observable<RestResponse<SessionCreate>> {
        return this.http.post<RestResponse<SessionCreate>>(`${this.apiUrl}`,sessionCreate);
    }

    findAll(page: number=0,idCours:string|null=""): Observable<RestResponse<SessionListe[]>> {
        return  this.http.get<RestResponse<SessionListe[]>>(`${this.apiUrl}/${idCours}?page=${page}`)
    }
}
