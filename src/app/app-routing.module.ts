import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TopicDetailComponent } from './home/topic-detail/topic-detail.component';
import { StartPageComponent } from './home/start-page/start-page.component';
const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  {
    path: '',
    component: StartPageComponent,
  },
  {
    path: 'details/:id',
    component: TopicDetailComponent,
  },
  // { path: 'not-found', component: NotFoundComponent },
  // { path: '**', redirectTo: '/not-found' },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
