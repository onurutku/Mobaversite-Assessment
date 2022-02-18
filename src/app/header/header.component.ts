import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import example from '../../assets/example.json';
import { AuthService } from '../auth/auth.service';

//typescript interface for login user
interface user {
  id: number;
  firtName: string;
  lastName: string;
  pp: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  searchForm: FormGroup;
  userLoggedIn: user;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl(null, Validators.required),
    });
    this.userLoggedIn = this.auth.getUserLoggedIn();
  }
  onSubmit() {
    //get search data from reactive form
    const search = this.searchForm.get('search').value;
    //simulate to send it to service to filter and get data
    console.log(search);
  }
  reload() {
    window.location.reload();
  }
}
