import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor() { }
  serviceCall() {
    console.log("Service was called");
   }

}
