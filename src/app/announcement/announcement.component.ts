import { Component, Input } from '@angular/core';
import { Announcement } from '../announcement';
import { category } from '../category';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent {
  @Input() message: string | undefined;
  @Input() title: string | undefined;
  @Input() author: string | undefined;
  @Input() imageUrl: string | undefined;
  @Input() id: string | undefined;
  category : category | undefined;
  constructor(
    private announcementService: AnnouncementService
  ) // private router: Router
  {}
  
  newAnnouncement: Announcement = {
    title: 'new',
    message: 'new',
    imageURL: 'new',
    author: 'lucian'
  };

   addAnnouncement() {
    console.log('New Announcement:', this.newAnnouncement);
  }

  editAnnouncement() {
  }

  deleteAnnouncement() {
  }
}

