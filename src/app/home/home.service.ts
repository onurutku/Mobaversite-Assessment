import { Injectable } from '@angular/core';
import example from '../../assets/example.json';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  topicsData = [];
  usersData = [];
  topicById = {};
  topicOwner = {};
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
  getTopicsDataById(id: string) {
    example.topics.map((element) => {
      if (element.id === id) {
        this.topicById = element;
      }
    });
    return this.topicById;
  }
  getTopicOwnerById(id: string) {
    example.users.map((element) => {
      if (element.id === id) {
        this.topicOwner = element;
      }
    });
    return this.topicOwner;
  }
}
