import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClasseCreate } from '../../models/classe.list';
import { ClasseServiceImpl } from '../../services/classe.service.impl';

@Component({
  selector: 'app-form-classe',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-classe.component.html',
  styleUrl: './form-classe.component.css'
})
export class FormClasseComponent {
  onSubmit(){
    this.classeService.create(this.classeCreate).subscribe(data=>{
      if(data.statuts==201){
        this.router.navigateByUrl("/classes")
      }else{
         this.errors=data.results
      }
    })

  }
  errors:any
  constructor(private classeService:ClasseServiceImpl,private router:Router){}
  classeCreate:ClasseCreate={
    libelle: "",
    effectif: "",
    filiere: "",
    niveau: "",
   
  }

}
