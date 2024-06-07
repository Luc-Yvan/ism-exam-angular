import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ClasseListe } from '../../../core/models/classe.list';
import { RestResponse } from '../../../core/models/rest.response';
import { ClasseServiceImpl } from '../../../core/services/classe/classe.service.impl';

@Component({
  selector: 'app-classe',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './classe.component.html',
  styleUrl: './classe.component.css'
})
export class ClasseComponent implements OnInit{
  response?:RestResponse<ClasseListe[]>;
  constructor(private classeService:ClasseServiceImpl){

  }
  ngOnInit(): void {
    this.classeService.findAll().subscribe(data=>this.response=data);
    this.refresh()
  }
  refresh(page:number=0,keyword:string=""){
    this.classeService.findAll(page,keyword).subscribe(data=>this.response=data);
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
