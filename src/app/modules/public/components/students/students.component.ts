import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource} from '@angular/material';
import {AddOrEditSeniorStudentDialogComponent} from "../../../admin/components/dialogs/add-or-edit-senior-student-dialog/add-or-edit-senior-student-dialog.component";
import {ConfirmSeniorStudentDeletionDialogComponent} from "../../../admin/components/dialogs/confirm-senior-student-deletion-dialog/confirm-senior-student-deletion-dialog.component";
import {NgxSpinnerService} from "ngx-spinner";
import {StudentsMock} from "../../mocks/students.mock";




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


  constructor(private _matDialog: MatDialog,
              private _ngxSpinnerService: NgxSpinnerService,
              private _studentsMock: StudentsMock) {
    super();

    this._setPaginatorInGeorgian();

    this.dataSource = new MatTableDataSource(this._studentsMock.students);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this._fetchGridData();
  }


  private _setPaginatorInGeorgian() {
    // Overwriting default properties of paginator
    this.itemsPerPageLabel = 'ჩანაწერების რაოდენობა გვერდზე:';
    this.nextPageLabel = 'შემდეგი გვერდი';
    this.previousPageLabel = 'წინა გვერდი';
  }

  private _fetchGridData(filterByData?: object) {
    this._ngxSpinnerService.show();

    console.log(filterByData);

    setTimeout(() => {
      this._ngxSpinnerService.hide();
    }, 1000);
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


  openAddOrEditSeniorStudentDialog() {
    const dialogRef = this._matDialog.open(AddOrEditSeniorStudentDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._fetchGridData();
      }
    })
  }

  openConfirmSeniorStudentDeletionDialog() {
    const dialogRef = this._matDialog.open(ConfirmSeniorStudentDeletionDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._fetchGridData();
      }
    })
  }

  openFilterGridSidenav() {
    this.sidenavId = 2;
    this._sidenav.open();
  }

  filter(e) {
    this._sidenav.close();
    this._fetchGridData(e);
  }

  onPagingChange(e) {
    this._fetchGridData(e);
  }

  onTableSort(e) {
    this._fetchGridData(e);
  }
}
