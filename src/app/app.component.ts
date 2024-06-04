import { Component, OnInit } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { CoursComponent } from './core/pages/cours/cours.component';
import { CoursListe } from './core/models/cours.list';
import { CoursServiceImpl } from './core/services/cours/cours.service.impl';
import { RestResponse } from './core/models/rest.response';
import { ClasseComponent } from './core/pages/classe/classe.component';
import { ClasseServiceImpl } from './core/services/classe/classe.service.impl';
import { ClasseListe } from './core/models/classe.list';
import { SalleComponent } from './core/pages/salle/salle.component';
import { ProfComponent } from './core/pages/prof/prof.component';
import { ProfListe } from './core/models/prof.list';
import { SalleListe } from './core/models/salle.list';
import { ProfServiceImpl } from './core/services/prof/prof.service.impl';
import { SalleServiceImpl } from './core/services/salle/salle.service.impl';
import { InscritsComponent } from './core/pages/inscrits/inscrits.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SalleComponent,ProfComponent,InscritsComponent,HeaderComponent,CoursComponent,ClasseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  response:any;
  title = 'ism-exam';
  ngOnInit(): void {
    
  }
 

  
}
