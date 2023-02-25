import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    CarouselComponent
  ],

  exports:[
    NavComponent,
    CarouselComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
