import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

// interface topics {
//   id: string;
//   title: string;
//   like: number;
//   dislike: number;
//   comment: number;
//   date: string;
//   ownerId: string;
//   details: {
//     body: string;
//     picture: string;
//     replies: [];
//     comments: [
//       {
//         ownerId: string;
//         body: string;
//         past: string;
//         like: number;
//         dislike: number;
//         replies: [
//           {
//             past: string;
//             ownerId: string;
//             body: string;
//             picture: string;
//             like: string;
//             dislike: string;
//           }
//         ];
//       }
//     ];
//   };
// }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  popularClicked: boolean = true;
  recentClicked: boolean = false;
  topicsData: any = [{}];
  usersData: any = [{}];
  constructor(private home: HomeService) {}

  ngOnInit(): void {
    this.topicsData = this.home.getTopicsData();
    this.usersData = this.home.getUsersData();
  }
  popular() {
    this.popularClicked = true;
    this.recentClicked = false;
  }
  recent() {
    this.recentClicked = true;
    this.popularClicked = false;
  }
}
