import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import { RouterModule } from '@angular/router';
import { PaisTableComponent } from './components/pais-table/pais-table.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';
import { CapitalTableComponent } from './components/capital-table/capital-table.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorRegionComponent,
    PorPaisComponent,
    VerPaisComponent,
    PaisTableComponent,
    PaisInputComponent,
    CapitalTableComponent
  ],
  exports: [
    PorCapitalComponent,
    PorRegionComponent,
    PorPaisComponent,
    VerPaisComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PaisModule { }
