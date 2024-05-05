import { Observable } from "rxjs";
import { RestResponse } from "../models/rest.response";
import { SalleCreate, SalleListe } from "../models/salle.list";
import { SalleService } from "./salle.service";
import { Injectable } from "@angular/core";
import { environment } from "../../environnements/environment.development";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
export class SalleServiceImpl implements SalleService {
    private apiUrl=`${environment.APIURL}/salles`

    constructor(private http:HttpClient) { }
    create(salleCreate: SalleCreate): Observable<RestResponse<SalleCreate>> {
        return  this.http.post<RestResponse<SalleCreate>>(`${this.apiUrl}`,salleCreate)
    }

    findAll(page: number=0, keyword: string=""): Observable<RestResponse<SalleListe[]>> {
        return  this.http.get<RestResponse<SalleListe[]>>(`${this.apiUrl}?page=${page}&keyword=${keyword}`)
    }
}
