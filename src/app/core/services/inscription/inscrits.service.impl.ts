import { Injectable } from '@angular/core';
import { InscritsService } from './inscrits.service';
import { Observable } from 'rxjs';
import { InscriptionListe } from '../../models/inscription.liste';
import { RestResponse } from '../../models/rest.response';
import { HttpClient } from '@angular/common/http';
import { CoursListe } from '../../models/cours.list';
import { environment } from '../../../environnements/environment.development';

@Injectable({
  providedIn: 'root'
})
export class InscritsServiceImpl implements InscritsService {
  private apiUrl=`${environment.APIURL}/inscription`

  constructor(private http:HttpClient) { }
  findAll(page: number, classe: string): Observable<RestResponse<InscriptionListe[]>> {
      return this.http.get<RestResponse<InscriptionListe[]>>(`${this.apiUrl}?page=${page}&classe=${classe}`);
  }
}
