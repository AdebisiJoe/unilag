import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CreateDepartmentComponent } from './create-department/create-department.component';


const routes: Routes = [
  {path:'department',component: DepartmentListComponent},
  {path: 'create-departments',component:CreateDepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
