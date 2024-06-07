import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CoursListe } from '../../../core/models/cours.list';
import { RestResponse } from '../../../core/models/rest.response';
import { CoursServiceImpl } from '../../../core/services/cours/cours.service.impl';


@Component({
  selector: 'app-cours',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css'
})
export class CoursComponent implements OnInit{
  response?:RestResponse<CoursListe[]>;
  selectedEtatCours: string = '';
  constructor(private coursService:CoursServiceImpl){

  }
  ngOnInit(): void  {
    this.coursService.findAll().subscribe(data=>{
      this.response=data
    });
    this.refresh()
  }
  refresh(page:number=0,keyword:string="",select:string=""){
    this.coursService.findAll(page,keyword,select).subscribe(data=>this.response=data);
  }
  paginate(page:number){
    this.refresh(page)
  }
  searchLibelle(libelle:string){
    if(libelle.length>=3){
          this.refresh(0,libelle)
    }
  }
  searchEtatCours(etatCours:string){
    if(etatCours.length>=3){
          this.refresh(0,'',etatCours)
    }
  }

}
