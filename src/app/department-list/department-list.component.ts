import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router, Params } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments: Array<any>;
  constructor( public firebaseService: FirebaseService,private router: Router) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.firebaseService.getDepartments()
    .subscribe(result => {
      this.departments = result;
      
    })
  }

  viewEditPage(item){
    this.router.navigate(['/edit-departments/'+ item.payload.doc.id]);
  }

}
