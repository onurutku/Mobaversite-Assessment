import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { PopUsersComponent } from './home/pop-users/pop-users.component';
import { TopicDetailComponent } from './home/topic-detail/topic-detail.component';
import { HomeService } from './home/home.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AuthComponent,
    PopUsersComponent,
    TopicDetailComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [AuthService, HomeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
