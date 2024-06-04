import { Observable } from "rxjs";
import { InscriptionCreate, InscriptionListe } from "../models/inscription.list";
import { RestInscription } from "../models/rest.inscription";
import { InscritsService } from "./inscrits.service";
import { Injectable } from "@angular/core";
import { environment } from "../../environnements/environment.development";
import { HttpClient } from "@angular/common/http";
import { RestResponse } from "../models/rest.response";

@Injectable({
    providedIn: 'root'
  })
export class InscritsServiceImpl implements InscritsService{
    private apiUrl=`${environment.APIURL}/inscription`
    constructor(private http:HttpClient) { }
    findAll(page: number,idSession:string|null="",classe: string): Observable<RestInscription<InscriptionListe[]>> {
        return this.http.get<RestInscription<InscriptionListe[]>>(`${this.apiUrl}/${idSession}?page=${page}&classe=${classe}`);
    }
    create(inscriptionCreate: InscriptionCreate): Observable<RestResponse<InscriptionCreate>> {
        return  this.http.post<RestResponse<InscriptionCreate>>(`${this.apiUrl}`,inscriptionCreate)
    }
}
