import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DepartmentValidators } from './department.validator';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {

  constructor(
    public firebaseService: FirebaseService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  form= new FormGroup({
    department:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
    faculty:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  get department(){
    return this.form.get('department');
  }

  get faculty(){
    return this.form.get('faculty');
  }

  

  saveDepartment(value){
    this.firebaseService.createDepartment(value)
    .then(
      res => {
        console.log(res);
        this.router.navigate(['/department']);
      }
    )
  }
}
