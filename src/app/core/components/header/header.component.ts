import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CoursComponent } from '../../pages/cours/cours.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet,CoursComponent,RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
