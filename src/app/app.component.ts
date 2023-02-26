import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CitasUBR';
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
