import { Observable } from "rxjs";
<<<<<<< HEAD:src/app/core/services/classe.service.impl.ts
import { ClasseCreate, ClasseListe } from "../models/classe.list";
import { RestResponse } from "../models/rest.response";
=======
import { ClasseListe } from "../../models/classe.list";
import { RestResponse } from "../../models/rest.response";
>>>>>>> 3a149ce929fd61790cc70643ecf01ae521185572:src/app/core/services/classe/classe.service.impl.ts
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
    create(classeCreate: ClasseCreate): Observable<RestResponse<ClasseCreate>> {
        return  this.http.post<RestResponse<ClasseCreate>>(`${this.apiUrl}`,classeCreate)
    }
    findAll(page:number=0, keyword:string=""): Observable<RestResponse<ClasseListe[]>> {
        return  this.http.get<RestResponse<ClasseListe[]>>(`${this.apiUrl}?page=${page}&keyword=${keyword}`)
    }
}
