import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class StudentListComponent implements AfterViewInit{
 
  studentDataset = [
    {
      className: 'class1',
      students : [
        {name: 'Akshay',
        address: 'kaudane',
        email: 'akshay@gmail.com',
        phone: '744852963',
        class: 1},
        {name: 'Raju',
        address: 'koregav',
        email: 'raju@gmail.com',
        phone: '744852963',
        class: 1},
        {name: 'Prakash',
        address: 'shikrapur',
        email: 'prakash@gmail.com',
        phone: '744852963',
        class: 1},
      ]
    },
    {
      className: 'class2',
      students : [
        {name: 'Sunil',
        address: 'wagholi',
        email: 'sunil@gmail.com',
        phone: '744852963',
        class: 2},
        {name: 'Mahesh',
        address: 'karvenagar',
        email: 'mahesh@gmail.com',
        phone: '744852963',
        class: 2},
        {name: 'Ankita',
        address: 'baner',
        email: 'ankita@gmail.com',
        phone: '744852963',
        class: 2},
      ]
    },
    {
      className: 'class3',
      students : [
        {name: 'Shravani',
        address: 'vimannagar',
        email: 'shravani@gmail.com',
        phone: '744852963',
        class: 3},
        {name: 'sai',
        address: 'manjari',
        email: 'sai@gmail.com',
        phone: '744852963',
        class: 3},
        {name: 'Ganesh',
        address: 'katraj',
        email: 'ganesh@gmail.com',
        phone: '744852963',
        class: 3},
      ]
    },
    {
      className: 'class4',
      students : [
        {name: 'Sandhya',
        address: 'hadapsar',
        email: 'sandhya@gmail.com',
        phone: '744852963',
        class: 4},
        {name: 'Monika',
        address: 'vadagav sheri',
        email: 'monika@gmail.com',
        phone: '744852963',
        class: 4},
        {name: 'Sarthak',
        address: 'lohgaon',
        email: 'sarthak@gmail.com',
        phone: '744852963',
        class: 4},
      ]
    },
    {
      className: 'class5',
      students : [
        {name: 'Shourya',
        address: 'kharadi',
        email: 'shourya@gmail.com',
        phone: '744852963',
        class: 5},
        {name: 'Darshan',
        address: 'dhankawadi',
        email: 'darshan@gmail.com',
        phone: '744852963',
        class: 5},
        {name: 'Gauri',
        address: 'shivajinagar',
        email: 'gauri@gmail.com',
        phone: '744852963',
        class: 5},
      ]
    },
    {
      className: 'class6',
      students : [
        {name: 'Sreva',
        address: 'sambhajinagar',
        email: 'sreva@gmail.com',
        phone: '744852963',
        class: 6},
        {name: 'Manasi',
        address: 'nagar',
        email: 'manasi@gmail.com',
        phone: '744852963',
        class: 6},
        {name: 'Reva',
        address: 'pathardi',
        email: 'reva@gmail.com',
        phone: '744852963',
        class: 6},
      ]
    },
    {
      className: 'class7',
      students : [
        {name: 'Harshad',
        address: 'daund',
        email: 'harshad@gmail.com',
        phone: '744852963',
        class: 7},
        {name: 'Santosh',
        address: 'patas',
        email: 'santosh@gmail.com',
        phone: '744852963',
        class: 7},
        {name: 'Sunita',
        address: 'baramati',
        email: 'sunita@gmail.com',
        phone: '744852963',
        class: 7},
      ]
    },
    {
      className: 'class8',
      students : [
        {name: 'Sandip',
        address: 'shirur',
        email: 'sandip@gmail.com',
        phone: '744852963',
        class: 8},
        {name: 'Sumit',
        address: 'songaon',
        email: 'sumit@gmail.com',
        phone: '744852963',
        class: 8},
        {name: 'Vicky',
        address: 'kashti',
        email: 'vicky@gmail.com',
        phone: '744852963',
        class: 8},
      ]
    },
    {
      className: 'class9',
      students : [
        {name: 'Sagar',
        address: 'lonavala',
        email: 'sagar@gmail.com',
        phone: '744852963',
        class: 9},
        {name: 'Amol',
        address: 'beed',
        email: 'amol@gmail.com',
        phone: '744852963',
        class: 9},
        {name: 'Roshni',
        address: 'malegaon',
        email: 'roshni@gmail.com',
        phone: '744852963',
        class: 9},
      ]
    },
    {
      className: 'class10',
      students : [
        {name: 'Shubham',
        address: 'mundhwa',
        email: 'shubham@gmail.com',
        phone: '744852963',
        class: 10},
        {name: 'Vedant',
        address: 'patoda',
        email: 'vedant@gmail.com',
        phone: '744852963',
        class: 10},
        {name: 'Atharv',
        address: 'chaufula',
        email: 'atharv@gmail.com',
        phone: '744852963',
        class: 10},
      ]
    }
  ];
  allElementsExpanded : boolean = false;
  columnsToDisplay = ['ClassName'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: any[] | any;
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.dataSource = new MatTableDataSource(this.studentDataset);
    console.log(this.studentDataset)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  toggleExpand(){
    this.allElementsExpanded = !this.allElementsExpanded
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource);
    console.log(filterValue.trim().toLowerCase());
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}
