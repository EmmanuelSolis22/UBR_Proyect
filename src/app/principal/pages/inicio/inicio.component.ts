import { Component } from '@angular/core';
import { AfterViewInit,  ViewChild } from '@angular/core';

import { MdbCarouselComponent } from 'mdb-angular-ui-kit/carousel';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent /*implements AfterViewInit */{
  media = [
    {
      imagen: 'assets/img/portada_3.jpg',
      // titulo: 'Unidad Básica de Rehabilitación (UBR)'
      titulo: 'Unidad Básica de Rehabilitación (UBR)',
      desc: 'La calidad nunca es un accidente. Siempre es el resultado de un esfuerzo inteligente.',
      autor:'-John Ruskin',
    },
    {
      imagen: 'assets/img/portada_4.jpg',
      titulo: 'Unidad Básica de Rehabilitación (UBR)',
      desc: 'La buena hospitalidad es sencilla; consiste en un poco de fuego, algo de comida, y mucha quietud.',
      autor:'-Ralph Waldo Emerson',
    },
    {
      imagen: 'assets/img/portada_1.jpg',
      titulo: 'Unidad Básica de Rehabilitación (UBR)',
      desc: 'Si hay esperanza, hay fe, y si hay fe, tenemos ese motor que nos mueve para seguir adelante',
      autor:'-Valentina Jude',
    }
  ];
  transicion_ims = 500;

  @ViewChild('carousel') carousel!: MdbCarouselComponent;

  // ngAfterViewInit(): void {
  //   this.carousel.stop();
  // }

  // onSlideChange(): void {
  //   console.log('slide change');
  // }
  // (slideChange)="onSlideChange()" ---->>HTML

}
