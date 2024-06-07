import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RestResponse } from '../../../core/models/rest.response';
import { SalleListe } from '../../../core/models/salle.list';
import { SalleServiceImpl } from '../../../core/services/salle/salle.service.impl';

@Component({
  selector: 'app-salle',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './salle.component.html',
  styleUrl: './salle.component.css'
})
export class SalleComponent  implements OnInit{
  response?:RestResponse<SalleListe[]>;
  constructor(private salleService:SalleServiceImpl){

  }
  ngOnInit(): void {
    this.salleService.findAll().subscribe(data=>this.response=data);
    this.refresh()
  }
  refresh(page:number=0,keyword:string=""){
    this.salleService.findAll(page,keyword).subscribe(data=>this.response=data);
  }
  paginate(page:number){
    this.refresh(page)
  }
  searchNom(nom:string){
    if(nom.length>=3){
          this.refresh(0,nom)
    }
  }


}
