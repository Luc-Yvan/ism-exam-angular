import { Injectable } from '@angular/core';
import { SessionListe } from '../../models/session.list';
import { Observable } from 'rxjs';
import { RestResponse } from '../../models/rest.response';


export interface SessionService {
  findAll(page:number,idCours:string|null):Observable<RestResponse<SessionListe[]>>;
  
}
