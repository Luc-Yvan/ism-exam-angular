import { Observable } from "rxjs";
import { RestResponse } from "../models/rest.response";
import { SessionListe } from "../models/session.list";
import { SessionService } from "./session.service";
import { Injectable } from "@angular/core";
import { environment } from "../../environnements/environment.development";
import { HttpClient } from "@angular/common/http";



@Injectable({
    providedIn: 'root'
  })
export class SessionServiceImpl implements SessionService{
    private apiUrl=`${environment.APIURL}/sessions`
    constructor(private http:HttpClient) { }
    findAll(page: number=0,idCours:string|null=""): Observable<RestResponse<SessionListe[]>> {
        return  this.http.get<RestResponse<SessionListe[]>>(`${this.apiUrl}/${idCours}?page=${page}`)
    }
}
