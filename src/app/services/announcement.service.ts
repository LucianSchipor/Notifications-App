import { Injectable } from '@angular/core';
import { Announcement } from '../announcement';
import { Observable, Subject, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class AnnouncementService {
  baseURL="https://localhost:7066";
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  subjectAnnouncement: Subject<Announcement[]> = new Subject<Announcement[]>();
  refreshFilteredAnnouncements: Subject<Announcement> =
    new Subject<Announcement>();

  announcement: Announcement[] = [];
  searchedAnnouncement: Announcement[] = [
    {
      title: 'new',
      message: 'new',
      id: 'new',
      author: 'new',
      imageURL: 'new',
      categoryId: '0',
    }
  ];
  size: number = this.announcement.length;
  constructor(private httpClient: HttpClient) {}

  serviceCall() {
    console.log('Service was called');
  }
  
  getAnnouncements() : Observable<Announcement[]> {
  const url = `${this.baseURL}/Announcement/get-announcements`;
  return this.httpClient.get<Announcement[]>(url, this.httpOptions);
  }

  addAnnouncement(announcement: Announcement) {
    this.announcement.push(announcement);
    this.size++;
  }

  findAnnouncementForEdit(id: string): void {
    this.searchedAnnouncement = this.announcement.filter(
      (announ) => announ.id == id
    );
  }

  replaceAnnouncement(announcement: Announcement) {
    announcement.id = this.searchedAnnouncement[0].id;
    announcement.title = this.searchedAnnouncement[0].title;
    announcement.message = this.searchedAnnouncement[0].message;
    announcement.author = this.searchedAnnouncement[0].author;
    announcement.imageURL = this.searchedAnnouncement[0].imageURL;
    }
      findAnnouncementForDelete(id: string) {
    this.searchedAnnouncement = this.announcement.filter(
      (announ) => announ.id === id
    );
    const foundIndex = this.announcement.findIndex(
      (x) => x.id == this.searchedAnnouncement[0].id
    );
    this.searchedAnnouncement.splice(foundIndex, 1);
    this.refreshFilteredAnnouncements.next(this.announcement[foundIndex]);
    this.announcement.splice(foundIndex, 1);
    this.subjectAnnouncement.next(this.announcement);

  }

  updateAnnouncement(announcement: Announcement): void {
    const url = `${this.baseURL}/Announcement/update-announcement`;
    console.log("Update anno apelat;");

    this.httpClient.put(url, announcement, this.httpOptions).subscribe(
      () => {
        console.log("Anunțul a fost actualizat cu succes.");
      },
      (error) => {
        console.error("Eroare la actualizarea anunțului:", error);
      }
    );
  }
}

