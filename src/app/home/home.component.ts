import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  popularClicked: boolean = true;
  recentClicked: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  popular() {
    this.popularClicked = true;
    this.recentClicked = false;
  }
  recent() {
    this.recentClicked = true;
    this.popularClicked = false;
  }
}
