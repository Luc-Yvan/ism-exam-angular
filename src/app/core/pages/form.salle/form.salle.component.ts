import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SalleService } from '../../services/salle/salle.service';
import { Router } from '@angular/router';
import { SalleServiceImpl } from '../../services/salle/salle.service.impl';
import { SalleCreate } from '../../models/salle.list';

@Component({
  selector: 'app-form.salle',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.salle.component.html',
  styleUrl: './form.salle.component.css'
})
export class FormSalleComponent {
  errors:any
  constructor(private salletService:SalleServiceImpl,private router:Router){}
  salleCreate:SalleCreate={
    nom: "",
    numero: "",
    capacite: "",
   
  }
  onSubmit(){
    this.salletService.create(this.salleCreate).subscribe(data=>{
      if(data.statuts==201){
        this.router.navigateByUrl("/clients")
      }else{
         this.errors=data.results
      }
    })

  }

}
