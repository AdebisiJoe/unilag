import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { EditDepartmentsComponent } from './edit-departments/edit-departments.component';


const routes: Routes = [
  {path:'department',component: DepartmentListComponent},
  {path: 'create-departments',component:CreateDepartmentComponent},
  {path: 'edit-departments/:id',component:EditDepartmentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
