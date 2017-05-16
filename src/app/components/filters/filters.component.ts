import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FilterInterface } from '../../models/filters';

@Component({
  selector: 'todo-filters',
  template: `
    <ul class="filters">
      <li *ngFor="let f of filters">
        <a href="#" (click)="changeFilter.next(f)" [class.selected]="filter.title === f.title">{{f.title}}</a>
      </li>
    </ul>
  `
})
export class FiltersComponent {
  @Output() changeFilter = new EventEmitter<FilterInterface>();
  filter: string;
  filters: FilterInterface[];

  @Input() set active(val) {
    this.filter = val;
  }

  constructor() {
    this.filters = [{title: 'All'}, {title: 'Completed'}, {title: 'Active'}];
  }
}
