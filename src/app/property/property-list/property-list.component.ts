import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProperty } from 'src/app/model/iproperty';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties: Array<IProperty>;

  constructor(private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2;
    }

    this.housingService.getAllProperties(this.SellRent).subscribe(
      data => {
        this.properties = data;
        console.log(data);
        // console.log(this.route.snapshot.url.toString());

      }, error => {
        console.log('httperror:');
        console.log(error);
      }
    )
  }

}
