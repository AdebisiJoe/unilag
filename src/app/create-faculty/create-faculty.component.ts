import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-faculty',
  templateUrl: './create-faculty.component.html',
  styleUrls: ['./create-faculty.component.css']
})
export class CreateFacultyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form=new FormGroup({
    faculty:new FormControl('',[Validators.required])
  });

  saveFaculty(value){
     console.log(value);
  }
}
