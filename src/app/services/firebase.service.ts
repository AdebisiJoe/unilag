import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
    

  constructor(public db: AngularFirestore) { }


  createDepartment(value){
    return this.db.collection('departments').add({
      department: value.department,
      faculty: value.faculty,
      departmentToSearch: value.department.toLowerCase(),
    });
  }

  getDepartments(){
    return this.db.collection('departments').snapshotChanges();
  }

  checkifDepartmentAlreadyExist(){
   
  }
}
