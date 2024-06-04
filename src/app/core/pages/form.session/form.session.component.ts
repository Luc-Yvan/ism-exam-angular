import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SessionCreate } from '../../models/session.list';
import { ClasseService } from '../../services/classe/classe.service';
import { ProfService } from '../../services/prof/prof.service';
import { ProfServiceImpl } from '../../services/prof/prof.service.impl';
import { ClasseServiceImpl } from '../../services/classe/classe.service.impl';
import { SessionServiceImpl } from '../../services/session/session.service.impl';

@Component({
  selector: 'app-form.session',
  standalone: true,
  imports: [],
  templateUrl: './form.session.component.html',
  styleUrl: './form.session.component.css'
})
export class FormSessionComponent {
    sessionForm: any;
    professeurs: string[] =[];
    classes: string[] = [];
  
    constructor(
      private fb: FormBuilder,
      private professeurService: ProfServiceImpl,
      private classeService: ClasseServiceImpl,
      private sessionService: SessionServiceImpl,
    ) { }
  
    ngOnInit(): void {
      this.sessionForm = this.fb.group({
        cours: [''],
        etatCours: [''],
        typeCours: [''],
        dateCours: [''],
        heureCours: [''],
        finCours: [''],
        professeur: [''],
        classes: [''],
        salle: [''],
        capacite: ['']
      });
  
     
    }
    
    onCoursChange(cours: string) {
      // Charger les professeurs correspondant au cours
      this.professeurService.getProfesseursForCours(cours).subscribe(profs => {
        this.professeurs = profs;
      });
  
      // Charger les classes correspondant au cours
      this.classeService.getClassesForCours(cours).subscribe(classes => {
        this.classes = classes;
      });
    }
    onSubmit() {
      
      if (this.sessionForm.valid) {
        const session: SessionCreate = {
          cours: this.sessionForm.value.libelle ?? '',
          etatCours: this.sessionForm.value.etatCours?? 0,
          professeur: this.sessionForm.value.professeur ?? '',
          classes: this.sessionForm.value.classes ?? [],
        };
    }
  }
}
