import { Observable } from "rxjs";
<<<<<<< HEAD:src/app/core/services/cours.service.ts
import { CoursCreate, CoursListe } from "../models/cours.list";
import { RestResponse } from "../models/rest.response";
=======
import { CoursListe } from "../../models/cours.list";
import { RestResponse } from "../../models/rest.response";
>>>>>>> 3a149ce929fd61790cc70643ecf01ae521185572:src/app/core/services/cours/cours.service.ts

export interface CoursService {
    findAll(page:number,keyword:string,select:string):Observable<RestResponse<CoursListe[]>>;
    create(coursCreate:CoursCreate):Observable<RestResponse<CoursCreate>>;

}
