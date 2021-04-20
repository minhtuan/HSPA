import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IProperty } from '../model/iproperty';

@Injectable({
  providedIn: 'root'
})

export class HousingService {

  constructor(private httpClient: HttpClient) { }

  // getAllProperties(){
  getAllProperties(SellRent: number): Observable<IProperty[]>{
    return this.httpClient.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<IProperty> = [];

        for(const id in data){
          if(data.hasOwnProperty(id) && data[id].SellRent === SellRent){
            propertiesArray.push(data[id]);
          }
        }

        return propertiesArray;
      })
    );
  }

}
