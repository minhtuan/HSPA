import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IProperty } from '../model/iproperty';
import { Property } from '../model/property';
import { IPropertyBase } from '../model/ipropertybase';

@Injectable({
  providedIn: 'root'
})

export class HousingService {

  constructor(private httpClient: HttpClient) { }

  getAllCities(): Observable<string[]> {
    return this.httpClient.get<string[]>('http://localhost:5000/city');
  }

  getProperty(id: number){
    return this.getAllProperties().pipe(
      map(propertyArray => {
        //throw new Errorng('Some error');
        return propertyArray.find(p => p.Id === id);
      })
    );
  }

  // getAllProperties(){
  getAllProperties(SellRent?: number): Observable<Property[]>{
    return this.httpClient.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<Property> = [];
        const localProperties = JSON.parse(localStorage.getItem('newProp'));

        if(localProperties){
          for(const id in localProperties){
            if(SellRent){
              if(localProperties.hasOwnProperty(id) && localProperties[id].SellRent === SellRent){
                propertiesArray.push(localProperties[id]);
              }
            }else{
              propertiesArray.push(localProperties[id]);
            }
          }
        }

        for(const id in data){
          if(SellRent){
            if(data.hasOwnProperty(id) && data[id].SellRent === SellRent){
              propertiesArray.push(data[id]);
            }
          }else {
            propertiesArray.push(data[id]);
          }
        }

        return propertiesArray;
      })
    );

    return this.httpClient.get<Property[]>('data/properties.json');
  }

  addProperty(property: Property){
    let newProp = [property];

    // Add new property in array if newProp already exit
    if(localStorage.getItem('newProp')){
      newProp = [property, ...JSON.parse(localStorage.getItem('newProp'))];
    }

    localStorage.setItem('newProp', JSON.stringify(newProp));
  }

  newPropID() {
    if (localStorage.getItem('PID')) {
        localStorage.setItem('PID', String(+localStorage.getItem('PID') + 1));
        return +localStorage.getItem('PID');
    } else {
        localStorage.setItem('PID', '101');
        return 101;
    }
  }
}
