import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  latestTopicId: string;
  constructor(private home: HomeService, private router: Router) {}

  ngOnInit(): void {
    this.topicsData = this.home.getTopicsData();
    this.usersData = this.home.getUsersData();
    this.topicsData.sort((a, b) => {
      if (a.date > b.date) {
        this.latestTopicId = a.id;
      }
      if (a.date < b.date) {
        this.latestTopicId = b.id;
      }
      return;
    });
    this.router.navigate(['details', this.latestTopicId]);
  }
  popular() {
    this.popularClicked = true;
    this.recentClicked = false;
  }
  recent() {
    this.recentClicked = true;
    this.popularClicked = false;
    this.topicsData.sort((a, b) => {
      if (a.date > b.date) return -1;
      if (a.date < b.date) return 1;
      return 0;
    });
  }
}
