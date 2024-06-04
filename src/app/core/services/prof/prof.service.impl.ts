import { Observable } from "rxjs";
<<<<<<< HEAD:src/app/core/services/prof.service.impl.ts
import { ProfCreate, ProfListe } from "../models/prof.list";
import { RestResponse } from "../models/rest.response";
=======
import { ProfListe } from "../../models/prof.list";
import { RestResponse } from "../../models/rest.response";
>>>>>>> 3a149ce929fd61790cc70643ecf01ae521185572:src/app/core/services/prof/prof.service.impl.ts
import { ProfService } from "./prof.service";
import { Injectable } from "@angular/core";
import { environment } from "../../../environnements/environment.development";
import { HttpClient } from "@angular/common/http";
import { ClasseCreate } from "../models/classe.list";

@Injectable({
    providedIn: 'root'
  })
export class ProfServiceImpl implements ProfService {
    private apiUrl=`${environment.APIURL}/profs`

    constructor(private http:HttpClient) { }
    create(profCreate: ProfCreate): Observable<RestResponse<ProfCreate>> {
        return  this.http.post<RestResponse<ProfCreate>>(`${this.apiUrl}`,profCreate)
    }

    findAll(page: number=0, keyword: string=""): Observable<RestResponse<ProfListe[]>> {
        return  this.http.get<RestResponse<ProfListe[]>>(`${this.apiUrl}?page=${page}&keyword=${keyword}`)
    }
}
