import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  media = [
    {
      'imagen': 'assets/img/portada_3.jpg',
      'titulo': 'Unidad Básica de Rehabilitación (UBR)'
    },
    {
      'imagen': 'assets/img/portada_2.jpg',
      'titulo': 'Unidad Básica de Rehabilitación (UBR)'
    },
    {
      'imagen': 'assets/img/prueba1.jpg',
      'titulo': 'Unidad Básica de Rehabilitación (UBR)'
    }
    
  ];

}
