import { Observable } from "rxjs";
import { RestResponse } from "../../models/rest.response";
import { SalleCreate, SalleListe } from "../../models/salle.list";

export interface SalleService {
    findAll(page:number,keyword:string):Observable<RestResponse<SalleListe[]>>;
    create(salleCreate:SalleCreate):Observable<RestResponse<SalleCreate>>;


}
