import { Component, Input } from '@angular/core';
import { Announcement } from '../announcement';
import { category } from '../category';
import { AnnouncementService } from '../services/announcement.service';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent{
  @Input() message: string;
  @Input() title: string;
  @Input() author: string;
  @Input() imageURL: string;
  @Input() categoryId: string;
  @Input() id: string;

  category : category | undefined;
  constructor(
    private announcementService: AnnouncementService
  ) // private router: Router
  {}
  
  newAnnouncement: Announcement = {
    title: 'new',
    message: 'new',
    imageURL: 'new',
    author: 'lucian',
    id: '0',
    categoryId: '0',
  };

   addAnnouncement() {
    console.log('New Announcement:', this.newAnnouncement);
  }

  editAnnouncement() {
    this.announcementService.findAnnouncementForEdit(this.id);
  }

  deleteAnnouncement() {
    this.announcementService.findAnnouncementForDelete(this.id);
  }
}

