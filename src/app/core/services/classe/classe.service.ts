import { Observable } from "rxjs";
<<<<<<< HEAD:src/app/core/services/classe.service.ts
import { RestResponse } from "../models/rest.response";
import { ClasseCreate, ClasseListe } from "../models/classe.list";
=======
import { RestResponse } from "../../models/rest.response";
import { ClasseListe } from "../../models/classe.list";
>>>>>>> 3a149ce929fd61790cc70643ecf01ae521185572:src/app/core/services/classe/classe.service.ts

export interface ClasseService {
    findAll(page:number,keyword:string):Observable<RestResponse<ClasseListe[]>>;
    create(classeCreate:ClasseCreate):Observable<RestResponse<ClasseCreate>>;

}
