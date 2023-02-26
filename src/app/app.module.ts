import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PrincipalModule } from './principal/principal.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// MDB BOOTSTRAP
// import {MdbCarouselModule} from 'mdb-angular-ui-kit/carousel';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// MDB BOOTSTRAP


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    PrincipalModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MdbCarouselModule,
    MatSlideToggleModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
