import { Observable } from "rxjs";
import { ProfCreate, ProfListe } from "../../models/prof.list";

import { RestResponse } from "../../models/rest.response";
import { ProfService } from "./prof.service";
import { Injectable } from "@angular/core";
import { environment } from "../../../environnements/environment.development";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
export class ProfServiceImpl implements ProfService {
    private apiUrl=`${environment.APIURL}/profs`
    getProfesseursForCours(cours: string) {
        return  this.http.get<RestResponse<ProfListe[]>>(`${this.apiUrl}/${cours}`)
      }
    constructor(private http:HttpClient) { }
    create(profCreate: ProfCreate): Observable<RestResponse<ProfCreate>> {
      return this.http.post<RestResponse<ProfCreate>>(this.apiUrl,profCreate);
    }

    findAll(page: number=0, keyword: string=""): Observable<RestResponse<ProfListe[]>> {
        return  this.http.get<RestResponse<ProfListe[]>>(`${this.apiUrl}?page=${page}&keyword=${keyword}`)
    }
}
