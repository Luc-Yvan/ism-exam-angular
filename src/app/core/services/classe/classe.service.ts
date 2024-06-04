import { Observable } from "rxjs";
import { ClasseListe, ClasseCreate } from "../../models/classe.list";
import { RestResponse } from "../../models/rest.response";

export interface ClasseService {
    findAll(page:number,keyword:string):Observable<RestResponse<ClasseListe[]>>;
    create(classeCreate:ClasseCreate):Observable<RestResponse<ClasseCreate>>;

}
