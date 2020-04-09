import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditDepartmentValidators } from './edit-departments.validator';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-departments',
  templateUrl: './edit-departments.component.html',
  styleUrls: ['./edit-departments.component.css']
})
export class EditDepartmentsComponent implements OnInit {

  item: any;
  form:FormGroup;
  constructor(    
    public firebaseService: FirebaseService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.item = data.payload.data();
        this.item.id = data.payload.id;
        this.createForm();
      }
    })
  }


  createForm(){
    this.form= new FormGroup({
      department:new FormControl(this.item.department,[
        Validators.required,
        Validators.minLength(3),
      ]),
      faculty:new FormControl(this.item.faculty,[
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }
  
  get department(){
    return this.form.get('department');
  }

  get faculty(){
    return this.form.get('faculty');
  }
  
  editDepartment(value){
    this.firebaseService.editDepartment(this.item.id,value)
    .then(
      res => {
        console.log(res);
        this.router.navigate(['/department']);
      }
    )
  }
  

}
