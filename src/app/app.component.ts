import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/components/header/header.component';
import { CoursComponent } from './core/pages/cours/cours.component';
import { CoursListe } from './core/models/cours.list';
import { CoursServiceImpl } from './core/services/cours.service.impl';
import { RestResponse } from './core/models/rest.response';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CoursComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.coursService.findAll().subscribe(data=>this.response=data);
  }
  title = 'ism-exam';
  response?:RestResponse<CoursListe[]>
  constructor( private coursService:CoursServiceImpl){}
}
