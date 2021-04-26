import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number;
  property = new Property();

  constructor(private route: ActivatedRoute,
              private router: Router,
              private housingService: HousingService) { }

  ngOnInit() {
    // this.propertyId = Number(this.route.snapshot.params['id']);
    this.propertyId = + this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data: Property) => {
        this.property = data['prp'];
      }
    );

    //== update parameters URL ==
    /*
    this.route.params.subscribe(
      (params) => {
        this.propertyId = + params['id'];

        //call service
        this.housingService.getProperty(this.propertyId).subscribe(
          //data => {
          //   this.property.Name = data.Name;
          // }
          (data: Property) => {
            this.property = data;
          }, error => this.router.navigate(['/'])
        );
      }
    );*/
  }

  /*
  onSelectNext(){
    this.propertyId += 1;
    // this.router.navigate(['property-detail/' + this.propertyId]);
    this.router.navigate(['property-detail', this.propertyId]);
  }*/
}
