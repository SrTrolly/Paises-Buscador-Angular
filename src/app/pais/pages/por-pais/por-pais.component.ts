import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li{
      cursor:pointer;
    }
  `
  ]

})
export class PorPaisComponent {

  termino: string = "";
  hayError: boolean = false;
  paisesSugeridos: Country[] = [];
  paises: Country[] = [];
  mostrarSugerencia: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.mostrarSugerencia = false;
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino).subscribe((paises) => {
      console.log(paises);
      this.paises = paises;

    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencia = true;
    this.paisService.buscarPais(termino).subscribe(paises => {
      this.paisesSugeridos = paises.splice(0, 5); // para que me muestre la cantidad de sugerencias
    }, (err) => {
      this.paisesSugeridos = [];
    })

  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
  }



}
