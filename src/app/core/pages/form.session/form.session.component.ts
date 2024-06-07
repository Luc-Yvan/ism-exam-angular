
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SessionCreate } from '../../models/session.list';
import { ClasseServiceImpl } from '../../services/classe/classe.service.impl';
import { ProfServiceImpl } from '../../services/prof/prof.service.impl';
import { SessionServiceImpl } from '../../services/session/session.service.impl';
import { ProfListe } from '../../models/prof.list';
import { ClasseListe } from '../../models/classe.list';

@Component({
  selector: 'app-form.session',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.session.component.html',
  styleUrl: './form.session.component.css'
})
export class FormSessionComponent {

  sessionForm: any;
  professeurs: ProfListe[] =[];
  classes: ClasseListe[] = [];

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
  
  onCoursChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const cours = target?.value;

    if (cours) {
      // Charger les professeurs correspondant au cours
      this.professeurService.getProfesseursForCours(cours).subscribe(profs => {
        this.professeurs = profs.results;
      });

      // Charger les classes correspondant au cours
      this.classeService.getClassesForCours(cours).subscribe(classes => {
        this.classes = classes.results;
      });
    }
  }
  onSubmit(): void {
    if (this.sessionForm.valid) {
      const session: SessionCreate = {
        cours: this.sessionForm.value.cours ?? '',
        etatCours: this.sessionForm.value.etatCours ?? 0,
        typeCours: this.sessionForm.value.typeCours ?? '',
        dateCours: this.sessionForm.value.dateCours ?? '',
        heureCours: this.sessionForm.value.heureCours ?? '',
        finCours: this.sessionForm.value.finCours ?? '',
        professeur: this.sessionForm.value.professeur ?? '',
        classes: this.sessionForm.value.classes ?? [],
        salle: this.sessionForm.value.salle ?? '',
        capacite: this.sessionForm.value.capacite ?? 0
      };
      this.sessionService.create(session).subscribe(response => {
        console.log('Session créée:', response);
      });
    }
  }
}
