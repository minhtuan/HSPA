import { Component, Input, OnInit } from '@angular/core';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  // @Input() property_name : any
  //   Property : any = {
  //     "Id" : 1,
  //     "Type" : "House",
  //     "Name" : "House",
  //     "Price" : 12000
  //   }

  @Input() property : IProperty

  constructor() { }

  ngOnInit(): void {
  }

}
