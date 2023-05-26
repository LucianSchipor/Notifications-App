import { Component, Input } from '@angular/core';
import { Form } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { Announcement } from '../announcement';
@Component({
  selector: 'app-add-announcement-form',
  templateUrl: './add-announcement-form.component.html',
  styleUrls: ['./add-announcement-form.component.scss']
})
export class AddAnnouncementFormComponent {
@Input() announcement: Announcement = {
  title: 'new',
  message: 'new',
  author: 'new',
  imageURL: 'new'
}




submitForm() {
  // Logică de gestionare a trimiterii formularului
  console.log('Form submitted:', this.announcement);
  // Puteți adăuga aici codul pentru a salva sau a trimite datele către un serviciu
}

};


