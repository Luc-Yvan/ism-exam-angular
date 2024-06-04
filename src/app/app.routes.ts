import { Routes } from '@angular/router';
import { CoursComponent } from './core/pages/cours/cours.component';
import { ClasseComponent } from './core/pages/classe/classe.component';
import { ProfComponent } from './core/pages/prof/prof.component';
import { SalleComponent } from './core/pages/salle/salle.component';
import { FormSalleComponent } from './core/pages/form.salle/form.salle.component';
import { SessionComponent } from './core/pages/session/session.component';

import { InscriptionComponent } from './core/pages/inscription/inscription.component';
import { FormClasseComponent } from './core/pages/form-classe/form-classe.component';
import { FormProfComponent } from './core/pages/form-prof/form-prof.component';
import { FormCoursComponent } from './core/pages/form-cours/form-cours.component';


import { InscritsComponent } from './core/pages/inscrits/inscrits.component';
import { FormInscriptionComponent } from './core/pages/form.inscription/form.inscription.component';
import { FormSessionComponent } from './core/pages/form.session/form.session.component';

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
        children:[
            {
                path:"",
                component:ClasseComponent,

            },
            {
                path:"form",
                component:FormClasseComponent
            }
        ]
    },
    {
        path:"prof",
        children:[
            {
                path:"",
                component:ProfComponent,

            },
            {
                path:"form",
                component:FormProfComponent
            }
        ]
    },
    {
        path:"session",
        children:[
            {
            path:":id",
            component:SessionComponent,
            },
            {
                path:"",
                component:FormSessionComponent
            }
        ]
     
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
