import { Injectable } from '@angular/core';
import { Announcement } from '../announcement';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AnnouncementService {
  subjectAnnouncement: Subject<Announcement[]> = new Subject<Announcement[]>();
  refreshFilteredAnnouncements: Subject<Announcement> =
    new Subject<Announcement>();

  private announcement: Announcement[] = [
    {
      imageURL: '',
      id: '1',
      message: 'General',
      title: 'BRTA',
      author: 'Theo',
      category: { id: '2', name: 'General' },
    },
    {
      imageURL: '',
      id: '2',
      message: 'Course',
      title: 'MVP',
      author: 'Theut',
      category: { id: '1', name: 'Course' },
    },
    {
      imageURL: '',
      id: '3',
      message: 'Laboratory',
      title: 'MVP',
      author: 'Theutu',
      category: { id: '3', name: 'Laboratory' },
    },
  ];
  searchedAnnouncement: Announcement[] = [
    {
      title: 'new',
      message: 'new',
      id: 'new',
      author: 'new',
      imageURL: 'new',
    }
  ];
  size: number = this.announcement.length;
  constructor() {}

  serviceCall() {
    console.log('Service was called');
  }
  
  getAnnouncements() : Observable<Announcement[]> {
    return of(this.announcement);
  }

  addAnnouncement(announcement: Announcement) {
    this.announcement.push(announcement);
    this.size++;
  }

  findAnnouncementForEdit(id: string): void {
    this.searchedAnnouncement = this.announcement.filter(
      (announ) => announ.id === id
    );
  }
  replaceAnnouncement(announcement: Announcement) {
    announcement.id = this.searchedAnnouncement[0].id;

    const foundIndex = this.announcement.findIndex(
      (x) => x.id == announcement.id
    );
    this.announcement[foundIndex] = announcement;
    this.searchedAnnouncement.splice(0);
    this.subjectAnnouncement.next(this.announcement);
  }
  findAnnouncementForDelete(id: string) {
    this.searchedAnnouncement = this.announcement.filter(
      (announ) => announ.id === id
    );
    const foundIndex = this.announcement.findIndex(
      (x) => x.id == this.searchedAnnouncement[0].id
    );
    this.refreshFilteredAnnouncements.next(this.announcement[foundIndex]);
    this.announcement.splice(foundIndex, 1);
    this.searchedAnnouncement.splice(0);
    this.subjectAnnouncement.next(this.announcement);
  }
}

