import { BrowserModule } from '@angular/platform-browser';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { CreateDepartmentComponent } from './create-department/create-department.component';
import { EditDepartmentsComponent } from './edit-departments/edit-departments.component';
import { CreateFacultyComponent } from './create-faculty/create-faculty.component';
import { ListFacultiesComponent } from './list-faculties/list-faculties.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DepartmentListComponent,
    CreateDepartmentComponent,
    EditDepartmentsComponent,
    CreateFacultyComponent,
    ListFacultiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
