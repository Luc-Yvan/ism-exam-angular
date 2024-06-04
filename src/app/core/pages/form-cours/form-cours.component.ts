import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClasseListe } from '../../models/classe.list';
import { ProfListe } from '../../models/prof.list';

import { CoursCreate } from '../../models/cours.list';
import 'select2';
import { ClasseServiceImpl } from '../../services/classe/classe.service.impl';
import { CoursServiceImpl } from '../../services/cours/cours.service.impl';
import { ProfServiceImpl } from '../../services/prof/prof.service.impl';
declare var $: any;

@Component({
  selector: 'app-form-cours',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-cours.component.html',
  styleUrl: './form-cours.component.css'
})
export class FormCoursComponent implements OnInit{

  errors:any
  classes: ClasseListe[] = [];
  professeurs: ProfListe[] = [];
  constructor(private fb:FormBuilder,
     private router:Router
    ,private classeService: ClasseServiceImpl
    ,private profService: ProfServiceImpl
    ,private coursService: CoursServiceImpl){

  }
  coursForm = this.fb.group({
    libelle: ["", Validators.required],
    volume_horaire: [0, [Validators.required, Validators.min(1)]],
    professeurs: [[], Validators.required],
    classes: [[], Validators.required]
  });
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngAfterViewInit(): void {
    this.initializeSelect2();
  }

  initializeSelect2(): void {
    // Initialize Select2 on the select elements
    $('#professeurs').select2();
    $('#classes').select2();
  
    // Stockez une référence au composant pour y accéder dans la portée de la fonction de rappel
    const self = this;
  
    // Update form control value when select2 changes
    $('#professeurs').on('change', (event: any) => {
      const selectedProfesseurs = $(this).val() as string[]; // Récupérez les valeurs sélectionnées
      selectedProfesseurs.forEach(prof => {
        self.addProfesseur(prof); // Ajoutez chaque professeur à la liste
      });
    });
  
    $('#classes').on('change', (event: any) => {
      const selectedClasses = $(this).val() as string[]; // Récupérez les valeurs sélectionnées
      selectedClasses.forEach(classe => {
        self.addClasse(classe); // Ajoutez chaque classe à la liste
      });
    });
  }
  
  addProfesseur(prof: string): void {
    const professeursControl = this.coursForm.get('professeurs') as FormControl;
    const professeurs = professeursControl.value as string[];
    professeurs.push(prof);
    professeursControl.setValue(professeurs);
  }
  
  addClasse(classe: string): void {
    const classesControl = this.coursForm.get('classes') as FormControl;
    const classes = classesControl.value as string[];
    classes.push(classe);
    classesControl.setValue(classes);
  }

  onFormSubmit() {

  }
  loadClasses(){
      this.classeService.findAll().subscribe(response => {
        console.log(response.results)
      this.classes = response.results; // Assuming RestResponse has a 'data' property
    })
  }

  loadProfs(){
      this.profService.findAll().subscribe(response => {
        console.log(response.results)
      this.professeurs = response.results; // Assuming RestResponse has a 'data' property
    })
  }

  addCours(): void {
    if (this.coursForm.valid) {
      const cours: CoursCreate = {
        libelle: this.coursForm.value.libelle ?? '',
        volume_horaire: this.coursForm.value.volume_horaire ?? 0,
        professeurs: this.coursForm.value.professeurs ?? [],
        classes: this.coursForm.value.classes ?? [],
        etatCours: ''
      };
      alert(cours.professeurs)
      console.log(cours)
      this.coursService.create(cours).subscribe(data=>{
        if(data.statuts==201){
          console.log('Course added successfully', data);
          this.coursForm.reset();
          $('#professeurs').val(null).trigger('change');
          $('#classes').val(null).trigger('change');
          this.router.navigate(['/cours']);
        }else{
          this.errors=data.results
        }
      });
      
    }
  }

}
