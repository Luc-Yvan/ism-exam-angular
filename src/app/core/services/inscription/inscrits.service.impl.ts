import { Injectable } from '@angular/core';
import { InscritsService } from './inscrits.service';
import { Observable } from 'rxjs';
import { InscriptionCreate, InscriptionListe } from '../../models/inscription.liste';
import { RestResponse } from '../../models/rest.response';
import { HttpClient } from '@angular/common/http';
import { CoursListe } from '../../models/cours.list';
import { environment } from '../../../environnements/environment.development';
import { RestInscription } from '../../models/rest.inscription';

@Injectable({
  providedIn: 'root'
})
export class InscritsServiceImpl implements InscritsService {
  private apiUrl=`${environment.APIURL}/inscription`

  constructor(private http:HttpClient) { }
  findAll(page: number,idSession:string|null="",classe: string): Observable<RestInscription<InscriptionListe[]>> {
      return this.http.get<RestInscription<InscriptionListe[]>>(`${this.apiUrl}/${idSession}?page=${page}&classe=${classe}`);
  }
  
  create(inscriptionCreate: InscriptionCreate): Observable<RestResponse<InscriptionCreate>> {
    return  this.http.post<RestResponse<InscriptionCreate>>(`${this.apiUrl}`,inscriptionCreate)
}
}
