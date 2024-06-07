import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ClasseListe } from '../../models/classe.list';
import { ProfListe } from '../../models/prof.list';
import { ClasseServiceImpl } from '../../services/classe/classe.service.impl';
import { ProfServiceImpl } from '../../services/prof/prof.service.impl';
import { CoursCreate } from '../../models/cours.list';
import { CoursServiceImpl } from '../../services/cours/cours.service.impl';
import { ReactiveFormsModule, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import 'select2';
declare var $: any;

@Component({
  selector: 'app-form-cours',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.cours.component.html',
  styleUrls: ['./form.cours.component.css']
})
export class FormCoursComponent implements OnInit, AfterViewInit {
  errors: any;
  classes: ClasseListe[] = [];
  professeurs: ProfListe[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private classeService: ClasseServiceImpl,
    private profService: ProfServiceImpl,
    private coursService: CoursServiceImpl
  ) {}

  coursForm = this.fb.group({
    libelle: ["", Validators.required],
    volume_horaire: [0, [Validators.required, Validators.min(1)]],
    professeurs: [[], Validators.required] as unknown as FormControl<string[] | null>,
    classes: [[], Validators.required] as unknown as FormControl<string[] | null>
  });

  ngOnInit(): void {
    this.loadClasses();
    this.loadProfs();
  }

  ngAfterViewInit(): void {
    this.initializeSelect2();
  }

  initializeSelect2(): void {
    // Initialize Select2 on the select elements with multiple selection
    $('#professeurs').select2();
    $('#classes').select2();

    // Store a reference to the component for use in the callback scope
    const self = this;

    // Update form control value when select2 changes
    $('#professeurs').on('change', function (event: any) {
      const selectedProfesseurs = $(event.target).val() as string[];
      self.coursForm.get('professeurs')?.setValue(selectedProfesseurs.length ? selectedProfesseurs : null);
    });

    $('#classes').on('change', function (event: any) {
      const selectedClasses = $(event.target).val() as string[];
      self.coursForm.get('classes')?.setValue(selectedClasses.length ? selectedClasses : null);
    });
  }

  loadClasses() {
    this.classeService.findAll().subscribe(response => {
      console.log(response.results);
      this.classes = response.results;
    });
  }

  loadProfs() {
    this.profService.findAll().subscribe(response => {
      console.log(response.results);
      this.professeurs = response.results;
    });
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
      console.log(cours);
      this.coursService.create(cours).subscribe(data => {
        if (data.statuts == 201) {
          console.log('Course added successfully', data);
          this.coursForm.reset();
          $('#professeurs').val(null).trigger('change');
          $('#classes').val(null).trigger('change');
          this.router.navigate(['/cours']);
        } else {
          this.errors = data.results;
        }
      });
    }
  }
}
