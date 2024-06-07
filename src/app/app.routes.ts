import { Routes } from '@angular/router';
import { ClasseComponent } from './core/pages/classe/classe.component';
import { CoursComponent } from './core/pages/cours/cours.component';
import { FormCoursComponent } from './core/pages/form.cours/form.cours.component';
import { FormInscriptionComponent } from './core/pages/form.inscription/form.inscription.component';
import { FormSalleComponent } from './core/pages/form.salle/form.salle.component';
import { InscritsComponent } from './core/pages/inscrits/inscrits.component';
import { ProfComponent } from './core/pages/prof/prof.component';
import { SalleComponent } from './core/pages/salle/salle.component';
import { SessionComponent } from './core/pages/session/session.component';

import { FormSessionComponent } from './core/pages/form.session/form.session.component';

export const routes: Routes = [
    {
      path:"RP",
      loadChildren:()=>import("./rp/rp.module").then(mod=>mod.RpModule)
    },
    {
      path:"",
      redirectTo:"/RP/classe",
      pathMatch:"full"
    }
];