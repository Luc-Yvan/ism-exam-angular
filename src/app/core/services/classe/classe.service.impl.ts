import { Observable } from "rxjs";
import { ClasseListe } from "../../models/classe.list";
import { RestResponse } from "../../models/rest.response";
import { ClasseService } from "./classe.service";
import { Injectable } from "@angular/core";
import { environment } from "../../../environnements/environment.development";
import { HttpClient } from "@angular/common/http";
import { CoursListe } from "../../models/cours.list";


@Injectable({
    providedIn: 'root'
  })
export class ClasseServiceImpl implements ClasseService {
    private apiUrl=`${environment.APIURL}/classes`


    constructor(private http:HttpClient) { }
    findAll(page:number=0, keyword:string=""): Observable<RestResponse<ClasseListe[]>> {
        return  this.http.get<RestResponse<ClasseListe[]>>(`${this.apiUrl}?page=${page}&keyword=${keyword}`)
    }
}