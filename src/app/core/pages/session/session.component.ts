import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SessionListe } from '../../models/session.list';
import { RestResponse } from '../../models/rest.response';
import { SessionServiceImpl } from '../../services/session/session.service.impl';

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './session.component.html',
  styleUrl: './session.component.css'
})
export class SessionComponent implements OnInit{
  response?:RestResponse<SessionListe[]>;
  idCours:string|null="";
  constructor(private sessionService:SessionServiceImpl,private route:ActivatedRoute){

  }
  ngOnInit(): void {
    this.idCours=this.route.snapshot.paramMap.get('id')
    this.refresh()
  }
  refresh(page:number=0){
    this.sessionService.findAll(page,this.idCours).subscribe(data=>this.response=data);
  }
  paginate(page:number){
    this.refresh(page)
  }

}
