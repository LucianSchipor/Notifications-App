import { Component } from '@angular/core';
import { Announcement } from './announcement';

@Component({
  selector: 'app-root',
  templateUrl: './announcement/announcement.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  announcements: Announcement[] =[ 
  {
    title: 'New Announcement',
    message: 'This is a sample announcement',
    author: 'John Doe'
  },
  {
    title: 'salut2',
    message: 'salut2', 
    author: 'Lucian'
  },
  {
title: 'anunt3',
message: 'sunt bun',
author: 'lilian'
  },
];
}

