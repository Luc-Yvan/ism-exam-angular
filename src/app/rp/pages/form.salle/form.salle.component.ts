import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SalleCreate } from '../../../core/models/salle.list';
import { SalleServiceImpl } from '../../../core/services/salle/salle.service.impl';

@Component({
  selector: 'app-form.salle',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.salle.component.html',
  styleUrl: './form.salle.component.css'
})
export class FormSalleComponent {
  errors:any
  constructor(private router:Router,private salleService:SalleServiceImpl){}
  salleCreate:SalleCreate={
    nom: "",
    numero: "",
    capacite: 0,
   
  }
  onSubmit(){
    this.salleService.create(this.salleCreate).subscribe(data=>{
      console.log(data)
      if(data.statuts==201){
        this.router.navigateByUrl("/salle")
      }else{
         this.errors=data.results
      }
    })

  }

}
