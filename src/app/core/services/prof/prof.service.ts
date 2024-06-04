import { Observable } from "rxjs";
<<<<<<< HEAD:src/app/core/services/prof.service.ts
import { ProfCreate, ProfListe } from "../models/prof.list";
import { RestResponse } from "../models/rest.response";
=======
import { ProfListe } from "../../models/prof.list";
import { RestResponse } from "../../models/rest.response";
>>>>>>> 3a149ce929fd61790cc70643ecf01ae521185572:src/app/core/services/prof/prof.service.ts

export interface ProfService {
    findAll(page:number,keyword:string):Observable<RestResponse<ProfListe[]>>;
    create(profCreate:ProfCreate):Observable<RestResponse<ProfCreate>>;


}
