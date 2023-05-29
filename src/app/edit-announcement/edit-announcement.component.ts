import { Component, OnInit } from '@angular/core';
import { category } from '../category';
import { AnnouncementService } from '../services/announcement.service';
import { Announcement } from '../announcement';
import { CategoriesComponent } from '../categories/categories.component';
import { Route } from '@angular/router';

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
    announcement: Announcement = {
      title: ' ',
      message: ' ',
      author: ' ',
      id: ' ',
      categoryId: ' ',
      imageURL: ' ',
    }

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
          this.announcement.id = this.announcementService.searchedAnnouncement[0].id;
          this.announcement.categoryId = this.announcementService.searchedAnnouncement[0].categoryId;
      
        }
  
    editAnnouncement() {

      if(this.title != null)
      {
        this.announcement.title = this.title;
      }
      else{
        this.announcement.title = this.announcementService.searchedAnnouncement[0].title;
      }

      if(this.textarea != null)
      {
        this.announcement.message = this.textarea;
      }
      else{
        this.announcement.message = this.announcementService.searchedAnnouncement[0].message;
      }

      if(this.author != null)
      {
        this.announcement.author = this.author;
      }
      else{
        this.announcement.author = this.announcementService.searchedAnnouncement[0].author;
      }
      if(this.imageURL != null)
      {
        this.announcement.imageURL = this.imageURL;
      }
      else{
        this.imageURL = this.announcementService.searchedAnnouncement[0].imageURL
      }
      

      this.announcementService.updateAnnouncement(this.announcement);     
    }
  }
  