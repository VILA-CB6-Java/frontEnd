import { AddQuestionService } from './Services/add-question.service';
import { TestSubmitService } from './Services/test-submit.service';
import { AnnouncementsService } from './Services/announcements.service';
import { LoginService } from './Services/login.service';
import { UserService } from './Services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { MainComponent } from './Components/main/main.component';
import { TestComponent } from './Components/test/test.component';
import { UserExamsComponent } from './Components/user-exams/user-exams.component';
import { AddQuestionComponent } from './Components/add-question/add-question.component';
import { ViewQuestionsComponent } from './Components/view-questions/view-questions.component';
import { ViewUsersComponent } from './Components/view-users/view-users.component';
import { TestQuestionsService } from './Services/test-questions.service';
import { ViewUsersService } from './Services/view-users.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './Components/footer/footer.component';
import { AnnouncementsComponent } from './Components/announcements/announcements.component';
import { Result } from './Models/Result.model';
import { ViewMessagesComponent } from './Components/view-messages/view-messages.component';
import { SendMessageService } from './Services/send.message.service';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';









@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    TestComponent,
    UserExamsComponent,
    AddQuestionComponent,
    ViewQuestionsComponent,
    ViewUsersComponent,
    FooterComponent,
    AnnouncementsComponent,
    ViewMessagesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbCarouselModule,
    AppRoutingModule
  ],
  providers: [
    TestQuestionsService, 
    ViewUsersService, 
    UserService, 
    LoginService, 
    AnnouncementsService, 
    TestSubmitService, 
    Result,
    SendMessageService,
    AddQuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
