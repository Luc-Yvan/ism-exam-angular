import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CoursListe } from '../../models/cours.list';
import { RestResponse } from '../../models/rest.response';
import { CoursService } from '../../services/cours.service';
import { CoursServiceImpl } from '../../services/cours.service.impl';

@Component({
  selector: 'app-cours',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css'
})
export class CoursComponent implements OnInit{
  response?:RestResponse<CoursListe[]>;
  constructor(private coursService:CoursServiceImpl){

  }
  ngOnInit(): void  {
    this.coursService.findAll().subscribe(data=>{
      this.response=data
    });
    this.refresh()
  }
  refresh(page:number=0,keyword:string=""){
    this.coursService.findAll(page,keyword).subscribe(data=>this.response=data);
  }
  paginate(page:number){
    this.refresh(page)
  }
  searchLibelle(libelle:string){
    if(libelle.length>=3){
          this.refresh(0,libelle)
    }
  }

}
