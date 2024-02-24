import { Component } from '@angular/core';
import { PlanetOnfoService } from '../../planet-info.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {
  filmsData: any;
  constructor(private location: Location,private planet:PlanetOnfoService) {
   }

  ngOnInit() {
    const stateData: any = this.location.getState();
    const filmsUrls:string[]= stateData?.filmsData?.films || [];
    console.log("films url are",filmsUrls);
    this.planet.getResidentsData(filmsUrls).subscribe((filmData: any[]) => {
      this.filmsData = filmData;
    },
    error => {
      console.error('Error fetching resident data:', error);
    })
  }
  goBack(){
    this.location.back();
  }
}
