import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
<<<<<<< HEAD
import { RestResponse } from '../../models/rest.response';
import { SessionListe } from '../../models/session.list';
import { SessionServiceImpl } from '../../services/session.service.impl';
=======
import { SessionListe } from '../../models/session.list';
import { RestResponse } from '../../models/rest.response';
import { SessionServiceImpl } from '../../services/session/session.service.impl';
>>>>>>> 3a149ce929fd61790cc70643ecf01ae521185572

@Component({
  selector: 'app-session',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './session.component.html',
  styleUrl: './session.component.css'
})
<<<<<<< HEAD
export class SessionComponent  implements OnInit{
=======
export class SessionComponent implements OnInit{
>>>>>>> 3a149ce929fd61790cc70643ecf01ae521185572
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
