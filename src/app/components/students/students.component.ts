import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {AddOrEditSeniorStudentDialogComponent} from "../shared/dialogs/add-or-edit-senior-student-dialog/add-or-edit-senior-student-dialog.component";
import {ConfirmSeniorStudentDeletionDialogComponent} from "../shared/dialogs/confirm-senior-student-deletion-dialog/confirm-senior-student-deletion-dialog.component";



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
  @ViewChild('sidenav') private _sidenav;

  sidenavId: number = null;


  displayedColumns: string[] = ['isEmployed', 'fullName', 'startDate', 'endDate', 'editAndDeleteIcons'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private _matDialog: MatDialog) {
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
    this.sidenavId = 1;
    this._sidenav.open();
  }

  openaddOrEditSeniorStudentDialog() {
    this._matDialog.open(AddOrEditSeniorStudentDialogComponent);
  }

  openConfirmSeniorStudentDeletionDialog() {
    this._matDialog.open(ConfirmSeniorStudentDeletionDialogComponent);
  }

  openFilterGridSidenav() {
    this.sidenavId = 2;
    this._sidenav.open();
  }
}
