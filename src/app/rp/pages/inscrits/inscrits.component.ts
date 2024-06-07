import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { InscriptionListe } from '../../../core/models/inscription.liste';
import { RestInscription } from '../../../core/models/rest.inscription';
import { InscritsServiceImpl } from '../../../core/services/inscription/inscrits.service.impl';

@Component({
  selector: 'app-inscrits',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './inscrits.component.html',
  styleUrl: './inscrits.component.css'
})
export class InscritsComponent implements OnInit{
  response?:RestInscription<InscriptionListe[]>;
  idSession:string|null="";
  constructor(private inscriptionService:InscritsServiceImpl,private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.idSession=this.route.snapshot.paramMap.get('id')
    this.refresh();
  }
  refresh(page:number=0,classe:string=""){
    this.inscriptionService.findAll(page,this.idSession,classe).subscribe(data=>this.response=data);
  }
  paginate(page:number){
    this.refresh(page)
  }

  searchClasse(classe:string){
    if(classe.length>=3){
          this.refresh(0,classe)
    }
  }
}
