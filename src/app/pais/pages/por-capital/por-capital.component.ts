import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  termino: string = "";
  hayError: boolean = false;
  paises: Country[] = []
  capitalesSugerido: Country[] = []
  mostrarSugerencia: boolean = false;
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarCapital(this.termino).subscribe((capitales) => {
      this.paises = capitales;
    }, (err) => {
      this.hayError = true;
      this.paises = [];
    });
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencia = true;
    this.paisService.buscarCapital(termino)
      .subscribe(capitales => {
        this.capitalesSugerido = capitales.splice(0, 5);
      }, (err) => {
        this.capitalesSugerido = [];
      })
  }

  buscarSugerido(termino: string) {
    this.buscar(termino);
  }



}
