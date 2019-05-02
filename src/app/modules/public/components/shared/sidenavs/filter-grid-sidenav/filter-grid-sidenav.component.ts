import {Component, EventEmitter, OnInit, Output} from '@angular/core';



@Component({
  selector: 'app-filter-grid-sidenav',
  templateUrl: './filter-grid-sidenav.component.html',
  styleUrls: ['./filter-grid-sidenav.component.scss']
})
export class FilterGridSidenavComponent implements OnInit {

  @Output() onFilter = new EventEmitter<object>();


  constructor() {
  }

  ngOnInit() {
  }


  load() {
    this.onFilter.emit({});
  }
}
