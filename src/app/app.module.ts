import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PrincipalModule } from './principal/principal.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    BrowserModule,
    SharedModule,
    PrincipalModule,
    AppRoutingModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }