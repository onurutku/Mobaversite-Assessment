import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-users',
  templateUrl: './pop-users.component.html',
  styleUrls: ['./pop-users.component.css'],
})
export class PopUsersComponent implements OnInit {
  constructor() {}
  @Input() usersDataToChild: any;
  ngOnInit(): void {}
}
