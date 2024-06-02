import { Routes } from '@angular/router';
import { CoursComponent } from './core/pages/cours/cours.component';
import { ClasseComponent } from './core/pages/classe/classe.component';
import { ProfComponent } from './core/pages/prof/prof.component';
import { SalleComponent } from './core/pages/salle/salle.component';
import { FormSalleComponent } from './core/pages/form.salle/form.salle.component';
import { SessionComponent } from './core/pages/session/session.component';
import { InscritsComponent } from './core/pages/inscrits/inscrits.component';
import { FormInscriptionComponent } from './core/pages/form.inscription/form.inscription.component';
import { FormCoursComponent } from './core/pages/form.cours/form.cours.component';
export const routes: Routes = [
    {
        path:"cours",
        children:[
            {
                path: "",
                component:CoursComponent
            },
            {
                path: "form",
                component: FormCoursComponent
            }
        ]
        
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
        
        path:"inscription",
        children:[
            {
                path: ":id",
                component: InscritsComponent
            },
            {
                path:"",
                component:FormInscriptionComponent
            }
        ]
        
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
