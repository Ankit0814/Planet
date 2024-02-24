import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetInfoComponent } from './planet-info/planet-info.component';
import { ResidentsComponent } from './planet-info/childcomponents/residents/residents.component';
import { FilmsComponent } from './planet-info/childcomponents/films/films.component';

const routes: Routes = [
  
  { path: 'planets', component: PlanetInfoComponent },
  { path: '', redirectTo: '/planets', pathMatch: 'full' },
  { path: 'planets/residents', component: ResidentsComponent },
  { path: 'planets/films', component: FilmsComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
