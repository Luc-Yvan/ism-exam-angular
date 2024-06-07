import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClasseComponent } from './pages/classe/classe.component';
import { CoursComponent } from './pages/cours/cours.component';

import { FormSalleComponent } from './pages/form.salle/form.salle.component';
import { FormSessionComponent } from './pages/form.session/form.session.component';
import { InscritsComponent } from './pages/inscrits/inscrits.component';
import { ProfComponent } from './pages/prof/prof.component';
import { SalleComponent } from './pages/salle/salle.component';
import { SessionComponent } from './pages/session/session.component';
import { LayoutComponent } from './layout/layout.component';
import { FormCoursComponent } from './pages/form.cours/form.cours.component';
import { FormInscriptionComponent } from './pages/form.inscription/form.inscription.component';

export const routes: Routes = [
  {
    
  path:"",
  component:LayoutComponent,
  children:[ {
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


        }
    ]
},
{
    path:"prof",
    children:[
        {
            path:"",
            component:ProfComponent,

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
},]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RpRoutingModule { }
