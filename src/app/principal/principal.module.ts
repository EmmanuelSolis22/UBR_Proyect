import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './pages/inicio/inicio.component';
import { QuienesSomosComponent } from './pages/quienes-somos/quienes-somos.component';
import { InicioSessionComponent } from './pages/inicio-session/inicio-session.component';
import { TerapeutasComponent } from './pages/terapeutas/terapeutas.component';

import { HammerModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';




@NgModule({
  declarations: [
    InicioComponent,
    QuienesSomosComponent,
    InicioSessionComponent,
    TerapeutasComponent

  ],

  exports:[
    InicioComponent,
    QuienesSomosComponent,
    InicioSessionComponent,
    TerapeutasComponent

  ],

  imports: [
    CommonModule,
    HammerModule,
    SharedModule
  ]
})
export class PrincipalModule { }
