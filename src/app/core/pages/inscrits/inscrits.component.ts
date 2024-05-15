import { Component, OnInit } from '@angular/core';
import { InscritsServiceImpl } from '../../services/inscription/inscrits.service.impl';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { RestResponse } from '../../models/rest.response';
import { InscriptionListe } from '../../models/inscription.liste';
import { CommonModule } from '@angular/common';
import { RestInscription } from '../../models/rest.inscription';

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
