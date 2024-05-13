import { Routes } from '@angular/router';
import { CoursComponent } from './core/pages/cours/cours.component';
import { ClasseComponent } from './core/pages/classe/classe.component';
import { ProfComponent } from './core/pages/prof/prof.component';
import { SalleComponent } from './core/pages/salle/salle.component';
import { FormSalleComponent } from './core/pages/form.salle/form.salle.component';
import { SessionComponent } from './core/pages/session/session.component';

export const routes: Routes = [
    {
        path:"cours",
        component:CoursComponent,
    },
    {
        path:"classe",
        component:ClasseComponent,
    },
    {
        path:"prof",
        component:ProfComponent,
    },
    {
        path:"session/:id",
        component:SessionComponent
    },
    {
        path:"salle",
        children:[
            {
            path:"",
        component:SalleComponent,

            },
            {
            path:"form",
        component:FormSalleComponent

        }
    ]
    },
];
