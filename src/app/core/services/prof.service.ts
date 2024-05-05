import { Observable } from "rxjs";
import { ProfListe } from "../models/prof.list";
import { RestResponse } from "../models/rest.response";

export interface ProfService {
    findAll(page:number,keyword:string):Observable<RestResponse<ProfListe[]>>;

}
