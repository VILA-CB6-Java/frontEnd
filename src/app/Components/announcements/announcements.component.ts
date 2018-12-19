import { AddAnnouncement } from '../../Models/addAnnouncement.model';
import { UserService } from '../../Services/user.service';
import { Announcement } from '../../Models/announcement.model';
import { AnnouncementsService } from '../../Services/announcements.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

  announcements: Announcement[];
  add = false;
  addAnnouncement: AddAnnouncement = new AddAnnouncement("","");
  
  constructor(
    private announcementsService: AnnouncementsService, 
    private userService: UserService) {
    this.announcementsService.getAnnouncements().subscribe(
      data => {this.announcements = data;
      });
  }

  get diagnostic(){
   return JSON.stringify(this.addAnnouncement);
  }


  ngOnInit() {
    
  }
  

  onAddAnnouncement(){
    this.announcementsService.addAnnouncement(this.addAnnouncement).subscribe(
      data => {
        alert("Announcement Posted");
        this.addAnnouncement.body="";
        this.addAnnouncement.title="";
        this.reload();
      },
      error => alert("A problem occurred")
    );   
  }

  reload(){
    this.announcementsService.getAnnouncements().subscribe(
      data => this.announcements = data);
  }

}
