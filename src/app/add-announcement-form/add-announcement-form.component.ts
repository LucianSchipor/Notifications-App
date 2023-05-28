import { Component, Input } from '@angular/core';
import { Form } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { Announcement } from '../announcement';
import { CategoriesComponent } from '../categories/categories.component';
import { category } from '../category';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-add-announcement-form',
  templateUrl: './add-announcement-form.component.html',
  styleUrls: ['./add-announcement-form.component.scss']
})


export class AddAnnouncementFormComponent {
  title: string;
  author!: string;
  imageURL!: string;
  textarea!: string;
  selectedCategory!: string;

  announcement: Announcement = {
    title: ' ',
    author: ' ',
    imageURL: ' ',
    message: ' ',
    categoryId: ' ',
    id: ' ',
  };


  constructor(private announcementservcie: AnnouncementService){}

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
selectedCateg! : category;
categoriesList! : category[];


submitForm() {
this.announcement.title = this.title;
this.announcement.message = this.textarea;
this.announcement.author = this.author;
this.announcement.imageURL = this.imageURL;
this.announcement.categoryId = this.selectedCateg.id;
this.announcementservcie.addAnnouncement(this.announcement);

  console.log('Form submitted:', this.announcement);
}

categoryReceived(cat: category){

}
};


