import {Component, OnInit} from '@angular/core';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';



const TESTDATA = [
  {'isEmployed': true, 'fullName': 'test fullname', 'startDate': 'test startDate', 'endDate': 'test endDate'},
  {'isEmployed': false, 'fullName': 'test fullname', 'startDate': 'test startDate', 'endDate': 'test endDate'},
  {'isEmployed': true, 'fullName': 'test fullname', 'startDate': 'test startDate', 'endDate': 'test endDate'},
  {'isEmployed': false, 'fullName': 'test fullname', 'startDate': 'test startDate', 'endDate': 'test endDate'},
  {'isEmployed': false, 'fullName': 'test fullname', 'startDate': 'test startDate', 'endDate': 'test endDate'}
];


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  displayedColumns: string[] = ['isEmployed', 'fullName', 'startDate', 'endDate', 'view-icon'];
  dataSource: MatTableDataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor() {
    this.dataSource = new MatTableDataSource(TESTDATA);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openStudentInfoSideNav() {

  }
}
