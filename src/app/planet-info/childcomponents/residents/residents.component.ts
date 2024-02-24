import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { PlanetOnfoService } from '../../planet-info.service';
@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.scss']
})
export class ResidentsComponent {
  residentsData: any;
  constructor(private location: Location,private planet:PlanetOnfoService) {
   }

  ngOnInit() {
    const stateData: any = this.location.getState();
    const residentUrls:string[]= stateData?.residentsData?.residents || [];
    console.log("resdients url are",residentUrls);
    this.planet.getResidentsData(residentUrls).subscribe((residentData: any[]) => {
      this.residentsData = residentData;
      console.log("length is", this.residentsData);
    },
    error => {
      console.error('Error fetching resident data:', error);
    })
  }
  goBack(){
    this.location.back();
  }
}
