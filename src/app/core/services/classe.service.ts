import { Observable } from "rxjs";
import { RestResponse } from "../models/rest.response";
import { ClasseCreate, ClasseListe } from "../models/classe.list";

export interface ClasseService {
    findAll(page:number,keyword:string):Observable<RestResponse<ClasseListe[]>>;
    create(classeCreate:ClasseCreate):Observable<RestResponse<ClasseCreate>>;

}
