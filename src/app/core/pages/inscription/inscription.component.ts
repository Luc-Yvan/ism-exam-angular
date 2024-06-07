import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { InscriptionListe } from '../../models/inscription.list';
import { RestInscription } from '../../models/rest.inscription';
import { InscritsServiceImpl } from '../../services/inscrits.service.impl';

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class InscriptionComponent  implements OnInit{
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
