import { Component, OnInit } from '@angular/core';
import { category } from '../category';
import { AnnouncementService } from '../services/announcement.service';
import { Announcement } from '../announcement';
import { CategoriesComponent } from '../categories/categories.component';

@Component({
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.scss']
})


  export class EditAnnouncementComponent {
    title!: string;
    author!: string;
    imageURL!: string;
    textarea!: string;
    selectedCategory!: string;
    announcement: Announcement;
    categories: category[] = [
      {
        id: '1',
        name: 'Course',
      },
      {
        id: '2',
        name: 'General',
      },
      {
        id: '3',
        name: 'Laboratory',
      },
    ];
  
    constructor(private announcementService: AnnouncementService) {

      this.title = this.announcementService.searchedAnnouncement[0].title;
      this.author = this.announcementService.searchedAnnouncement[0].author;
      this.textarea  = this.announcementService.searchedAnnouncement[0].message;
      this.imageURL = this.announcementService.searchedAnnouncement[0].imageURL;
    }
  
    editAnnouncement() {
      const announcement: Announcement = {
        title: this.title,
        message: this.textarea,
        author: this.author,
        imageURL: this.imageURL,
        id: this.announcementService.searchedAnnouncement[0].id,
        categoryId: this.announcementService.searchedAnnouncement[0].categoryId,
      };

      this.announcementService.updateAnnouncement(announcement);     

      console.log(this.announcementService.searchedAnnouncement[0].id + "a fost editat.");
      console.log(this.announcementService.searchedAnnouncement[0].title + "a fost editat.");
      console.log(this.announcementService.searchedAnnouncement[0].message + "a fost editat.");
      console.log(this.announcementService.searchedAnnouncement[0].author + "a fost editat.");
    }
  }
  