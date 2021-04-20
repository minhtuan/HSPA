import { Component, Input, OnInit } from '@angular/core';
import { IPropertyBase } from 'src/app/model/ipropertybase';

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

  @Input() property : IPropertyBase;
  @Input() hideIcons : boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
