import { Observable } from "rxjs";
import { ProfListe, ProfCreate } from "../../models/prof.list";
import { RestResponse } from "../../models/rest.response";



export interface ProfService {
    findAll(page:number,keyword:string):Observable<RestResponse<ProfListe[]>>;
    create(profCreate:ProfCreate):Observable<RestResponse<ProfCreate>>;


}
