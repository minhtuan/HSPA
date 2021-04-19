import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authUser(user: any){
  if(localStorage.getItem('Users')){
    var users = JSON.parse(localStorage.getItem('Users'));
    return users.find(d => d.userName === user.userName);
  }
  return user;
}

}
