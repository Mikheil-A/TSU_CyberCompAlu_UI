import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource} from '@angular/material';
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
  styleUrls: ['./students.component.scss'],
  providers: [
    // For overwriting/changing default properties of paginator
    {provide: MatPaginatorIntl, useClass: StudentsComponent}
  ]
})
export class StudentsComponent extends MatPaginatorIntl implements OnInit {
  @ViewChild('sidenav') private _sidenav;

  sidenavId: number = null;


  displayedColumns: string[] = ['isEmployed', 'fullName', 'startDate', 'endDate', 'editAndDeleteIcons'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private _matDialog: MatDialog) {
    super();

    this._setPaginatorInGeorgian();

    this.dataSource = new MatTableDataSource(TESTDATA);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  private _setPaginatorInGeorgian() {
    // Overwriting default properties of paginator
    this.itemsPerPageLabel = 'ჩანაწერების რაოდენობა გვერდზე:';
    this.nextPageLabel = 'შემდეგი გვერდი';
    this.previousPageLabel = 'წინა გვერდი';
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
