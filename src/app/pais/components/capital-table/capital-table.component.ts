import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-capital-table',
  templateUrl: './capital-table.component.html',
  styles: [
  ]
})
export class CapitalTableComponent implements OnInit {

  @Input("paises") capitales: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
