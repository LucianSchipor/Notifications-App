import { Component, EventEmitter } from '@angular/core';
import { category } from '../category';
import { Announcement } from '../announcement';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  title : string = "notifications-app"
  announcements: Announcement[] =[ 
  {
    title: 'New Announcement',
    message: 'This is a sample announcement',
    author: 'John Doe',
    imageURL: "none",
    category: { id: 1, name: 'General'},

  },
  {
    title: 'salut2',
    message: 'salut2', 
    author: 'Lucian',
    imageURL: "none",
    category: { id: 1, name: 'General' },

  },
  {
    title: 'anunt3',
    message: 'sunt bun',
    author: 'lilian',
    imageURL: "none",
    category: { id: 1, name: 'General' },
  },
];


categorySelected : category = {
  name: 'category selected',
  id: 0,
};
selectedCategory!: EventEmitter<category>;

  filteredAnnouncement!: Announcement[];
  
  constructor(private announcementService: AnnouncementService) {}

  ngOnInit(): void {
    this.announcementService.serviceCall();
    };

    categoryReceived(cat: category) {
    this.categorySelected = cat;
    if (!this.categorySelected) this.filteredAnnouncement = this.announcements;
    else
      this.filteredAnnouncement = this.announcements.filter(
        (announ) => announ.category.name === this.categorySelected.name
      );
  }
}
