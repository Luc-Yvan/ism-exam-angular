import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { CoursComponent } from './core/pages/cours/cours.component';
import { CoursListe } from './core/models/cours.list';
import { CoursServiceImpl } from './core/services/cours.service.impl';
import { RestResponse } from './core/models/rest.response';
import { ClasseComponent } from './core/pages/classe/classe.component';
import { ClasseServiceImpl } from './core/services/classe.service.impl';
import { ClasseListe } from './core/models/classe.list';
import { SalleComponent } from './core/pages/salle/salle.component';
import { ProfComponent } from './core/pages/prof/prof.component';
import { ProfListe } from './core/models/prof.list';
import { SalleListe } from './core/models/salle.list';
import { ProfServiceImpl } from './core/services/prof.service.impl';
import { SalleServiceImpl } from './core/services/salle.service.impl';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CoursComponent,HeaderComponent,ClasseComponent,SalleComponent,ProfComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'ism-exam';
  response?:RestResponse<CoursListe[]>
  response1?:RestResponse<ClasseListe[]>
  response2?:RestResponse<ProfListe[]>

  constructor( private coursService:CoursServiceImpl, private classeService:ClasseServiceImpl
    , private profService:ProfServiceImpl){}
  ngOnInit(): void {
    this.coursService.findAll().subscribe(data=>this.response=data);
    this.classeService.findAll().subscribe(data=>this.response1=data);
    this.profService.findAll().subscribe(data=>this.response2=data);




  }
 

  
}
