import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  
  properties: Array<any> = [
    {
      "Id" : 1,
      "Type" : "House",
      "Name" : "House",
      "Price" : 12000
    },
    {
      "Id" : 2,
      "Type" : "House",
      "Name" : "Villa",
      "Price" : 12500
    },
    {
      "Id" : 3,
      "Type" : "House",
      "Name" : "House 3",
      "Price" : 14300
    },
    {
      "Id" : 4,
      "Type" : "House",
      "Name" : "House 4",
      "Price" : 18000
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
