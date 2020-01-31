import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form= new FormGroup({
    'username':new FormControl(),
    'password':new FormControl(),
  });

}
