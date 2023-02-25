import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './principal/pages/inicio/inicio.component';
import { QuienesSomosComponent } from './principal/pages/quienes-somos/quienes-somos.component';
import { InicioSessionComponent } from './principal/pages/inicio-session/inicio-session.component';
import { TerapeutasComponent } from './principal/pages/terapeutas/terapeutas.component';


const routes:Routes =[

  {
      path:'',
      component:InicioComponent,
      pathMatch:'full'
  },
  {
      path:'quienes-somos',
      component:QuienesSomosComponent
  },

  {
    path:'terapeutas',
    component:TerapeutasComponent
  },
  {
    path:'inicio-session',
    component:InicioSessionComponent
  },
  {

    path:'**',
    redirectTo:''
  }

];

@NgModule({

    imports:[

      RouterModule.forRoot(routes)
    ],
    exports:[
      RouterModule
    ],
})

export class AppRoutingModule{

}
