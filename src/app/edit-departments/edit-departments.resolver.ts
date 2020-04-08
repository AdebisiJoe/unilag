import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from "@angular/router";
import { FirebaseService } from '../services/firebase.service';

@Injectable()
export class EditDepartmentResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseService) { }

  resolve(route: ActivatedRouteSnapshot,) {

    return new Promise((resolve, reject) => {
      let departmentId = route.paramMap.get('id');
      this.firebaseService.getDepartment(departmentId)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    })
  }
}
