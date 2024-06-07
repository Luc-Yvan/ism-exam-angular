import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClasseListe } from '../../../core/models/classe.list';
import { InscriptionCreate } from '../../../core/models/inscription.liste';
import { ClasseServiceImpl } from '../../../core/services/classe/classe.service.impl';
import { InscritsServiceImpl } from '../../../core/services/inscription/inscrits.service.impl';

@Component({
  selector: 'app-form.inscription',
  standalone: true,
  imports:  [FormsModule,CommonModule],
  templateUrl: './form.inscription.component.html',
  styleUrl: './form.inscription.component.css'
})
export class FormInscriptionComponent implements OnInit{
  
  constructor(private inscriptionComponent:InscritsServiceImpl,
    private classeService: ClasseServiceImpl,
    private router:Router) {

  }
  
  classes: ClasseListe[] = [];
 
  inscritsModel:InscriptionCreate={
    etudiant: "",
    
    anneeScolaire: "2024-2025",
    matricule: this.generateRandomString(8),
    classe: ""
  }
  
  ngOnInit(): void {
      this.classeService.findAll().subscribe(response => {
      this.classes = response.results; // Assuming RestResponse has a 'data' property
    });
  }
  onFormSubmit() {
    this.inscriptionComponent.create(this.inscritsModel).subscribe(data=>{
      console.log(data)
      if(data.statuts==201){
        this.router.navigateByUrl("/")
      }
      alert(this.inscritsModel.classe)
      console.log(this.inscritsModel.classe)
    })
  }

  private generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }
}
