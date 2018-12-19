import { ViewUsersComponent } from './Components/view-users/view-users.component';
import { ViewMessagesComponent } from './Components/view-messages/view-messages.component';
import { ViewQuestionsComponent } from './Components/view-questions/view-questions.component';
import { MainComponent } from './Components/main/main.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementsComponent } from './Components/announcements/announcements.component';
import { UserExamsComponent } from './Components/user-exams/user-exams.component';
import { TestComponent } from './Components/test/test.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo:'/index', pathMatch:'full'},
  {path: 'index', component: MainComponent},
  {path: 'announcements', component: AnnouncementsComponent},
  {path: 'pastexams', component: UserExamsComponent},
/*{path: 'test', component: TestComponent},*/
  {path: 'questions', component: ViewQuestionsComponent},
  {path: 'messages', component: ViewMessagesComponent},
  {path: 'users', component: ViewUsersComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }


