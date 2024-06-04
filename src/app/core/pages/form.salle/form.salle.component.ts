import { Component } from '@angular/core';
import { SalleServiceImpl } from '../../services/salle/salle.service.impl';
import { SalleCreate } from '../../models/salle.list';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
<<<<<<< HEAD
    capacite: 0,
   
  }
  onSubmit(){
    this.salletService.create(this.salleCreate).subscribe(data=>{
=======
    capacite: 0
  }
  onSubmit(){
    this.salleService.create(this.salleCreate).subscribe(data=>{
>>>>>>> 3a149ce929fd61790cc70643ecf01ae521185572
      console.log(data)
      if(data.statuts==201){
        this.router.navigateByUrl("/salle")
      }else{
         this.errors=data.results
      }
    })

  }

}
