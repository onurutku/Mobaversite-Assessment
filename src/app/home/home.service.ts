import { Injectable } from '@angular/core';
import example from '../../assets/example.json';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  topicsData = [];
  usersData = [];
  constructor() {}

  getTopicsData() {
    example.topics.map((element) => {
      this.topicsData.push(element);
    });
    return this.topicsData;
  }
  getUsersData() {
    example.users.map((element) => {
      this.usersData.push(element);
    });
    return this.usersData;
  }
}
