import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class StudentListComponent implements AfterViewInit, OnInit {

  studentDataset = [
    {
      className: 'class1',
      students: [
        {

          className: 'class1',
          name: 'Akshay',
          address: 'kaudane',
          email: 'akshay@gmail.com',
          phone: '744852963',
          class: 1
        },
        {
          className: 'class1',
          name: 'Raju',
          address: 'koregav',
          email: 'raju@gmail.com',
          phone: '744852963',
          class: 1
        },
        {
          className: 'class1',
          name: 'Prakash',
          address: 'shikrapur',
          email: 'prakash@gmail.com',
          phone: '744852963',
          class: 1
        },
      ]
    },
    {
      className: 'class2',
      students: [
        {
          className: 'class2',
          name: 'Sunil',
          address: 'wagholi',
          email: 'sunil@gmail.com',
          phone: '744852963',
          class: 2
        },
        {
          className: 'class2',
          name: 'Mahesh',
          address: 'karvenagar',
          email: 'mahesh@gmail.com',
          phone: '744852963',
          class: 2
        },
        {
          className: 'class2',
          name: 'Ankita',
          address: 'baner',
          email: 'ankita@gmail.com',
          phone: '744852963',
          class: 2
        },
      ]
    },
    {
      className: 'class3',
      students: [
        {
          className: 'class3',
          name: 'Shravani',
          address: 'vimannagar',
          email: 'shravani@gmail.com',
          phone: '744852963',
          class: 3
        },
        {
          className: 'class3',
          name: 'sai',
          address: 'manjari',
          email: 'sai@gmail.com',
          phone: '744852963',
          class: 3
        },
        {
          className: 'class3',
          name: 'Ganesh',
          address: 'katraj',
          email: 'ganesh@gmail.com',
          phone: '744852963',
          class: 3
        },
      ]
    },
    {
      className: 'class4',
      students: [
        {
          className: 'class4',
          name: 'Sandhya',
          address: 'hadapsar',
          email: 'sandhya@gmail.com',
          phone: '744852963',
          class: 4
        },
        {
          className: 'class4',
          name: 'Monika',
          address: 'vadagav sheri',
          email: 'monika@gmail.com',
          phone: '744852963',
          class: 4
        },
        {
          className: 'class4',
          name: 'Sarthak',
          address: 'lohgaon',
          email: 'sarthak@gmail.com',
          phone: '744852963',
          class: 4
        },
      ]
    },
    {
      className: 'class5',
      students: [
        {
          className: 'class5',
          name: 'Shourya',
          address: 'kharadi',
          email: 'shourya@gmail.com',
          phone: '744852963',
          class: 5
        },
        {
          className: 'class5',
          name: 'Darshan',
          address: 'dhankawadi',
          email: 'darshan@gmail.com',
          phone: '744852963',
          class: 5
        },
        {
          className: 'class5',
          name: 'Gauri',
          address: 'shivajinagar',
          email: 'gauri@gmail.com',
          phone: '744852963',
          class: 5
        },
      ]
    },
    {
      className: 'class6',
      students: [
        {
          className: 'class6',
          name: 'Sreva',
          address: 'sambhajinagar',
          email: 'sreva@gmail.com',
          phone: '744852963',
          class: 6
        },
        {
          className: 'class6',
          name: 'Manasi',
          address: 'nagar',
          email: 'manasi@gmail.com',
          phone: '744852963',
          class: 6
        },
        {
          className: 'class6',
          name: 'Reva',
          address: 'pathardi',
          email: 'reva@gmail.com',
          phone: '744852963',
          class: 6
        },
      ]
    },
    {
      className: 'class7',
      students: [
        {
          className: 'class7',
          name: 'Harshad',
          address: 'daund',
          email: 'harshad@gmail.com',
          phone: '744852963',
          class: 7
        },
        {
          className: 'class7',
          name: 'Santosh',
          address: 'patas',
          email: 'santosh@gmail.com',
          phone: '744852963',
          class: 7
        },
        {
          className: 'class7',
          name: 'Sunita',
          address: 'baramati',
          email: 'sunita@gmail.com',
          phone: '744852963',
          class: 7
        },
      ]
    },
    {
      className: 'class8',
      students: [
        {
          className: 'class8',
          name: 'Sandip',
          address: 'shirur',
          email: 'sandip@gmail.com',
          phone: '744852963',
          class: 8
        },
        {
          className: 'class8',
          name: 'Sumit',
          address: 'songaon',
          email: 'sumit@gmail.com',
          phone: '744852963',
          class: 8
        },
        {
          className: 'class8',
          name: 'Vicky',
          address: 'kashti',
          email: 'vicky@gmail.com',
          phone: '744852963',
          class: 8
        },
      ]
    },
    {
      className: 'class9',
      students: [
        {
          className: 'class9',
          name: 'Sagar',
          address: 'lonavala',
          email: 'sagar@gmail.com',
          phone: '744852963',
          class: 9
        },
        {
          className: 'class9',
          name: 'Amol',
          address: 'beed',
          email: 'amol@gmail.com',
          phone: '744852963',
          class: 9
        },
        {
          className: 'class9',
          name: 'Roshni',
          address: 'malegaon',
          email: 'roshni@gmail.com',
          phone: '744852963',
          class: 9
        },
      ]
    },
    {
      className: 'class10',
      students: [
        {
          className: 'class10',
          name: 'Shubham',
          address: 'mundhwa',
          email: 'shubham@gmail.com',
          phone: '744852963',
          class: 10
        },
        {
          className: 'class10',
          name: 'Vedant',
          address: 'patoda',
          email: 'vedant@gmail.com',
          phone: '744852963',
          class: 10
        },
        {
          className: 'class10',
          name: 'Atharv',
          address: 'chaufula',
          email: 'atharv@gmail.com',
          phone: '744852963',
          class: 10
        },
      ]
    }
  ];
  allElementsExpanded: boolean = false;
  columnsToDisplay = ['ClassName'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: any[] | any;
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('resizeMe') table: ElementRef;

  cols = ['Name', 'Address', 'Email', 'Phone', 'Class'];
  columnWidths: { [key: string]: string } = {};


  constructor() {
    this.dataSource = new MatTableDataSource(this.studentDataset);
  }

  ngOnInit(): void {
    this.cols.forEach(col => {
      this.columnWidths[col] = '150px';
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  toggleExpand() {
    this.allElementsExpanded = !this.allElementsExpanded
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    let fil: any = this.advancedFilter(filterValue.trim().toLowerCase())
    this.dataSource.filter = filterValue;
    if (!this.dataSource.filteredData.length) {
      this.dataSource.filter = fil?.className;
    }
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  advancedFilter(filt: string): string | any {
    let currData = this.dataSource.data;
    return this.findKnown(currData, filt)
  }
  findKnown(stdObjArr, valu) {
    return [].concat(...stdObjArr.map(o => o.students)).find(std => std.name.toLowerCase().includes(valu) || std.address.toLowerCase().includes(valu) || std.email.toLowerCase().includes(valu) || std.phone.toLowerCase().includes(valu))
  }

  onResizeStart(event: MouseEvent, col: string) {
    const initialX = event.clientX;
    const initialWidth = parseFloat(this.columnWidths[col]);

    const onMouseMove = (moveEvent: MouseEvent) => {
      const widthChange = moveEvent.clientX - initialX;
      this.columnWidths[col] = initialWidth + widthChange + 'px';
    };

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }

  sortData(event) {
    const data = this.dataSource.data.slice();
    if (!event.active || event.direction === '') {
      this.dataSource.data = data;
      return;
    }
  
    this.dataSource.data = data.sort((a, b) => {
      const isAsc = event.direction === 'asc';
      return this.compare(a[event.active], b[event.active], isAsc);
    });
  }
  
  compare(a, b, isAsc) {
    // Implement custom comparison logic here
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
