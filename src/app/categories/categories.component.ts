import { NgModule } from '@angular/core';
import { Component, EventEmitter, Output } from '@angular/core';
import { category } from '../category';
import {MatIconModule} from '@angular/material/icon';
import { MatOptionSelectionChange } from '@angular/material/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent {
  @Output() selectedCategory = new EventEmitter<category>();
  selectedCategory1: category | undefined;

  categoriesList: category[] = [
{
  id: '0',
  name: 'Course',
},

{
  id: '1',
  name: 'General',
},

{
  id: '2',
  name: 'Laboratory',
}
];

selectCategory(index: number) {
  this.selectedCategory.emit(this.categoriesList[index]);
}
}


