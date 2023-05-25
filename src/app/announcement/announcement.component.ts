import { Component, Input } from '@angular/core';
import { Announcement } from '../announcement';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent {
 @Input()
  announcements!: Announcement[];
}

