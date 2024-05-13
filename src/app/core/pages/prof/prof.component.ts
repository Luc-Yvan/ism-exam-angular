import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfListe } from '../../models/prof.list';
import { RestResponse } from '../../models/rest.response';
import { ProfServiceImpl } from '../../services/prof/prof.service.impl';

@Component({
  selector: 'app-prof',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './prof.component.html',
  styleUrl: './prof.component.css'
})
export class ProfComponent implements OnInit{
  response?:RestResponse<ProfListe[]>;
  constructor(private profService:ProfServiceImpl){

  }
  ngOnInit(): void {
    this.profService.findAll().subscribe(data=>this.response=data);
    this.refresh()
  }
  refresh(page:number=0,keyword:string=""){
    this.profService.findAll(page,keyword).subscribe(data=>this.response=data);
  }
  paginate(page:number){
    this.refresh(page)
  }
  searchGrade(grade:string){
    if(grade.length>=3){
          this.refresh(0,grade)
    }
  }

}
