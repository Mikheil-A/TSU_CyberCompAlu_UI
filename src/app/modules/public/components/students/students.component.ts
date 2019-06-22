import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatPaginatorIntl, MatSort, MatTableDataSource} from '@angular/material';
import {AddOrEditSeniorStudentDialogComponent} from "../../../admin/components/dialogs/add-or-edit-senior-student-dialog/add-or-edit-senior-student-dialog.component";
import {ConfirmSeniorStudentDeletionDialogComponent} from "../../../admin/components/dialogs/confirm-senior-student-deletion-dialog/confirm-senior-student-deletion-dialog.component";
import {NgxSpinnerService} from "ngx-spinner";
import {StudentsMock} from "../../mocks/students.mock";
import {StudentsService} from "../../services/students.service";



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
  clickedStudentId: string;


  displayedColumns: string[] = ['employed', 'full_name', 'startDate', 'graduate_date', 'editAndDeleteIcons'];
  dataSource: MatTableDataSource<any>;

  // /users/list-ზე ასეთ რაღაცას გამოვატან
  private _gridFilterData: object = {
    page: 1,
    limit: 10,
    property: 'created_at',
    direction: 'acs', // desc, ზრდადობა/კლებადომა ხო უნდა, order რო გიწერია ეს არის
    isEmployed: true, // false
    startDate: 42421434123414, // მილიწამებში უნის დაწყება
    endDate: 42421434123414, // მილიწამებში უნის დამთავრება
    input: 'rame string-i fullname-shi ro moidzebneba' // key არ უნდა, ამას რო გამოვატან სახელი-გვარი ში მოძებნე
  };

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private _matDialog: MatDialog,
              private _ngxSpinnerService: NgxSpinnerService,
              private _studentsMock: StudentsMock,
              private _studentsService: StudentsService) {
    super();

    this._setPaginatorInGeorgian();

    // this.dataSource = new MatTableDataSource(this._studentsMock.students);
  }

  ngOnInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;

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
    this.sidenavId = 1;
    this.clickedStudentId = id;
    this._sidenav.open();
  }


  openAddOrEditSeniorStudentDialog() {
    const dialogRef = this._matDialog.open(AddOrEditSeniorStudentDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._fetchGridData(this._gridFilterData);
      }
    })
  }

  openConfirmSeniorStudentDeletionDialog(studentId: number) {
    const dialogRef = this._matDialog.open(ConfirmSeniorStudentDeletionDialogComponent, {
      'data': studentId
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this._fetchGridData(this._gridFilterData);
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
    this._gridFilterData['page'] = e.pageIndex;
    this._gridFilterData['limit'] = e.pageSize;
    // this._fetchGridData(this._gridFilterData);
  }

  onTableSort(e) {
    console.log(e);
    // this._fetchGridData(this._gridFilterData);
  }
}
