import { Component } from '@angular/core';

import { ProfCreate } from '../../models/prof.list';
import { ProfServiceImpl } from '../../services/prof/prof.service.impl';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form.prof',
  standalone: true,
  imports: [],
  templateUrl: './form.prof.component.html',
  styleUrl: './form.prof.component.css'
})
export class FormProfComponent {
  onSubmit() {
    this.profService.create(this.profCreate).subscribe(data=>{
      if(data.statuts==201){
        this.router.navigateByUrl("/classes")
      }else{
         this.errors=data.results
      }
    })
    }
      errors:any
      constructor(private profService:ProfServiceImpl,private router:Router){}
      profCreate:ProfCreate={
        nomComplet: "",
        grade: "",
      }
}
