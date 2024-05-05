import { Observable } from "rxjs";
import { ProfListe } from "../models/prof.list";
import { RestResponse } from "../models/rest.response";
import { ProfService } from "./prof.service";
import { Injectable } from "@angular/core";
import { environment } from "../../environnements/environment.development";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
export class ProfServiceImpl implements ProfService {
    private apiUrl=`${environment.APIURL}/profs`

    constructor(private http:HttpClient) { }

    findAll(page: number=0, keyword: string=""): Observable<RestResponse<ProfListe[]>> {
        return  this.http.get<RestResponse<ProfListe[]>>(`${this.apiUrl}?page=${page}&keyword=${keyword}`)
    }
}
