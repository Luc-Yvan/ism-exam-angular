import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProfCreate } from '../../models/prof.list';

import { FormsModule } from '@angular/forms';
import { ProfServiceImpl } from '../../services/prof/prof.service.impl';

@Component({
  selector: 'app-form-prof',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-prof.component.html',
  styleUrl: './form-prof.component.css'
})
export class FormProfComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
  errors:any
  constructor(private profService:ProfServiceImpl,private router:Router){}
  classeCreate:ProfCreate={
    nomComplet: "",
    grade: "",
   
   
  }

}
