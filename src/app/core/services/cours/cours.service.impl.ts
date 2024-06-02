import { Observable } from "rxjs";
import { CoursCreate, CoursListe } from "../../models/cours.list";
import { RestResponse } from "../../models/rest.response";
import { CoursService } from "./cours.service";
import { environment } from "../../../environnements/environment.development";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
  })
export class CoursServiceImpl implements CoursService {
    private apiUrl=`${environment.APIURL}/cours`

    constructor(private http:HttpClient) { }
    findAll(page:number=0,keyword:string="",select:string=""): Observable<RestResponse<CoursListe[]>> {
        return  this.http.get<RestResponse<CoursListe[]>>(`${this.apiUrl}?page=${page}&keyword=${keyword}&etatCours=${select}`)
    }

    create(coursCreate: CoursCreate): Observable<RestResponse<CoursCreate>> {
        return  this.http.post<RestResponse<CoursCreate>>(`${this.apiUrl}`,coursCreate)
    }
}
