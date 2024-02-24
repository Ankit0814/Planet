import { Component, OnInit } from '@angular/core';
import { PlanetOnfoService } from './planet-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planet-info',
  templateUrl: './planet-info.component.html',
  styleUrls: ['./planet-info.component.scss']
})
export class PlanetInfoComponent implements OnInit {
  planets: any[] = [];
  nextUrl: string | null = null;
  constructor(private planetaryService: PlanetOnfoService, private router: Router) { }

  ngOnInit() {
    this.fetchPlanets();
  }
  fetchPlanets(): void {
    this.planetaryService.getPlanets()
      .subscribe(data => {
        console.log("planet data is ", data);
        this.planets = this.planets.concat(data.results);
        // this.planets = data.results;
        console.log("results is", this.planets);
        this.nextUrl = data.next;
      });
  }
  redirectToResidence(data:any){
    this.router.navigate(['/planets/residents'], { state: { residentsData: data } });
  }
  redirectToFilm(data:any){
    this.router.navigate(['/planets/films'], { state: { filmsData: data } });
  }
}
