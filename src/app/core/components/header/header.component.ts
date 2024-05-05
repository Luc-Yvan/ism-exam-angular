import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CoursComponent } from '../../pages/cours/cours.component';
import { ClasseComponent } from '../../pages/classe/classe.component';
import { SalleComponent } from '../../pages/salle/salle.component';
import { ProfComponent } from '../../pages/prof/prof.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,CoursComponent,RouterLink,RouterLinkActive,ClasseComponent,SalleComponent,ProfComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
