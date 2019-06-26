import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatPaginatorIntl, MatSidenav, MatSort, MatTableDataSource} from '@angular/material';
import {AddOrEditSeniorStudentDialogComponent} from "../../../admin/components/dialogs/add-or-edit-senior-student-dialog/add-or-edit-senior-student-dialog.component";
import {ConfirmSeniorStudentDeletionDialogComponent} from "../../../admin/components/dialogs/confirm-senior-student-deletion-dialog/confirm-senior-student-deletion-dialog.component";
import {NgxSpinnerService} from "ngx-spinner";
import {StudentsMock} from "../../mocks/students.mock";
import {StudentsService} from "../../services/students.service";
import {MatSnackBarService} from "../../../shared/services/mat-snack-bar.service";
import {AuthService} from "../../../auth/services/auth.service";



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
  @ViewChild('sidenav') private _sidenav: MatSidenav;

  sidenavId: number = null;
  clickedStudentId: string;
  clickedStudentInfo: object;


  displayedColumns: string[] = ['employed', 'full_name', 'startDate', 'graduate_date', 'editAndDeleteIcons'];
  dataSource: MatTableDataSource<any>;

  private _gridFilterData: object = {
    // paginator
    page: 1,
    limit: 10,

    // sorting
    property: 'created_at',
    direction: 'acs', // desc

    isEmployed: null, // true/false

    startDate: null, // milliseconds
    endDate: null, // milliseconds

    input: '' // string, searches in full name
  };

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private _matDialog: MatDialog,
              private _ngxSpinnerService: NgxSpinnerService,
              private _studentsMock: StudentsMock,
              private _studentsService: StudentsService,
              private _matSnackBarService: MatSnackBarService,
              public authService: AuthService) {
    super();

    this._setPaginatorInGeorgian();

    // this.dataSource = new MatTableDataSource(this._studentsMock.students);
  }

  ngOnInit() {
    // this._fetchGridData(this._gridFilterData);
    this._fetchGridData({});
  }


  private _setPaginatorInGeorgian() {
    // Overwriting default properties of paginator
    this.itemsPerPageLabel = 'ჩანაწერების რაოდენობა გვერდზე:';
    this.nextPageLabel = 'შემდეგი გვერდი';
    this.previousPageLabel = 'წინა გვერდი';
  }

  private _fetchGridData(filterByData: object) {
    this._ngxSpinnerService.show();

    this._studentsService.search(filterByData).subscribe((res) => {
      this.dataSource = new MatTableDataSource(res['data']);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, () => {
    }, () => {
      this._ngxSpinnerService.hide();
    });
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openStudentInfoSideNav(id: string) {
    if (this.authService.isLoggedIn) {
      this.sidenavId = 1;
      this.clickedStudentId = id;

      // fetch clicked student info
      this._studentsService.getStudent(this.clickedStudentId).subscribe(res => {
        this.clickedStudentInfo = res['data'];
        this._sidenav.open();
      });
    }
  }

  openAddOrEditSeniorStudentDialog(clickedRecordData: object = null) {
    const dialogRef = this._matDialog.open(AddOrEditSeniorStudentDialogComponent, {
      'data': clickedRecordData
    });
    dialogRef.afterClosed().subscribe((isAdded: boolean) => {
      if (isAdded) {
        // this._fetchGridData(this._gridFilterData);
        this._fetchGridData({});
        this._matSnackBarService.openSnackBar('სტუდენტი წარმატებით შეინახა');
      }
    })
  }

  openConfirmSeniorStudentDeletionDialog(studentId: number) {
    const dialogRef = this._matDialog.open(ConfirmSeniorStudentDeletionDialogComponent, {
      'data': studentId
    });

    const deleteSubscription = dialogRef.componentInstance.onDelete.subscribe(() => {
      // this._fetchGridData(this._gridFilterData);
      this._fetchGridData({});
      this._matSnackBarService.openSnackBar('სტუდენტი წარმატებით წაიშალა');
    });

    dialogRef.afterClosed().subscribe((isDeleted: boolean) => {
      // if (isDeleted) {
      //   this._fetchGridData(this._gridFilterData);
      // }
      deleteSubscription.unsubscribe();
    })
  }

  openFilterGridSidenav() {
    this.sidenavId = 2;
    this._sidenav.open();
  }

  reFetchFilteredGrid(e) {
    this._sidenav.close();

    this._gridFilterData['isEmployed'] = e.isEmployed;
    this._gridFilterData['startDate'] = e.startDate;
    this._gridFilterData['endDate'] = e.endDate;

    this._fetchGridData(e);
  }

  onPagingChange(e) {
    console.log(e);
    this._gridFilterData['page'] = e.pageIndex + 1;
    this._gridFilterData['limit'] = e.pageSize;

    this._fetchGridData(this._gridFilterData); // FIXME backend not working
  }

  onTableSort(e) {
    this._gridFilterData['property'] = e.active;
    this._gridFilterData['direction'] = e.direction;

    this._fetchGridData(this._gridFilterData);
  }
}
