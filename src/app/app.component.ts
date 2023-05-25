import { Component, EventEmitter, Output } from '@angular/core';
import { Announcement } from './announcement';
import { category } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  title : string = "notifications-app"
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


categorySelected : category;

selectedCategory!: EventEmitter<category>;

  category!: category;
  filteredAnnouncement!: Announcement[];
  
  categoryReceived(cat: category) {
    this.categorySelected = cat;
    if (!this.category) this.filteredAnnouncement = this.announcements;
    else
      this.filteredAnnouncement = this.announcements.filter(
        (announ) => announ.category.name === this.category.name
      );
  }

}


