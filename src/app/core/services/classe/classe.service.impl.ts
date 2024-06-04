import { Observable } from "rxjs";
import { ClasseService } from "./classe.service";
import { Injectable } from "@angular/core";
import { environment } from "../../../environnements/environment.development";
import { HttpClient } from "@angular/common/http";
import { ClasseCreate, ClasseListe } from "../../models/classe.list";
import { RestResponse } from "../../models/rest.response";


@Injectable({
    providedIn: 'root'
  })
export class ClasseServiceImpl implements ClasseService {
    getClassesForCours(cours: string) {
      throw new Error('Method not implemented.');
    }
    private apiUrl=`${environment.APIURL}/classes`
    constructor(private http:HttpClient) { }
    create(classeCreate: ClasseCreate): Observable<RestResponse<ClasseCreate>> {
        return  this.http.post<RestResponse<ClasseCreate>>(`${this.apiUrl}`,classeCreate)
    }
    findAll(page:number=0, keyword:string=""): Observable<RestResponse<ClasseListe[]>> {
        return  this.http.get<RestResponse<ClasseListe[]>>(`${this.apiUrl}?page=${page}&keyword=${keyword}`)
    }
}
