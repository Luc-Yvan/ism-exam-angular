import { Observable } from "rxjs";
import { CoursCreate, CoursListe } from "../models/cours.list";
import { RestResponse } from "../models/rest.response";

export interface CoursService {
    findAll(page:number,keyword:string,select:string):Observable<RestResponse<CoursListe[]>>;
    create(coursCreate:CoursCreate):Observable<RestResponse<CoursCreate>>;

}
