import { Observable } from "rxjs";
import { RestResponse } from "../models/rest.response";
import { ClasseListe } from "../models/classe.list";

export interface ClasseService {
    findAll(page:number,keyword:string):Observable<RestResponse<ClasseListe[]>>;
}
