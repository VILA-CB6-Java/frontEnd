import { AddAnnouncement } from '../Models/addAnnouncement.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Announcement } from '../Models/announcement.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AnnouncementsService {

  private url = "http://localhost:8500/announcements";
  private urlAdd = "http://localhost:8500/announcements/post";
  constructor(private http: HttpClient) {
   }
  
  getAnnouncements(): Observable <Announcement[]>{
    return this.http.get<Announcement[]>(this.url);
  }

  addAnnouncement(addAnnouncement: AddAnnouncement){
    return this.http.post<any>(this.urlAdd, addAnnouncement);
  }
}
