import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetInfoComponent } from './planet-info.component';
import { ResidentsComponent } from './childcomponents/residents/residents.component';
import { FilmsComponent } from './childcomponents/films/films.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlanetInfoComponent, ResidentsComponent, FilmsComponent],
  exports:[PlanetInfoComponent]
})

export class PlanetInfoModule { }
