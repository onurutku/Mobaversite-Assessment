import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //example user logged in
  userLoggedIn = {
    id: 7,
    firtName: 'Onur',
    lastName: 'Topaloğlu',
    //use null pp to see default logo if user profile photo doesn't exist :)
    pp: '../../assets/images/profilePhotos/onur.png',
    // pp: "",
  };
  constructor() {}
  //get user info method
  getUserLoggedIn() {
    return this.userLoggedIn;
  }
}
