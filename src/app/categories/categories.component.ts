import { NgModule } from '@angular/core';
import { Component, EventEmitter, Output } from '@angular/core';
import { category } from '../category';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})



export class CategoriesComponent {
  @Output() selectedCategory = new EventEmitter<category>();

  categoriesList: category[] = [
{
name: 'Course'
},
{
  name: 'General'
},
{
name: 'Laboratory'
}
];

selectCategory(index: number) {
  this.selectedCategory.emit(this.categoriesList[index]);
}
}


