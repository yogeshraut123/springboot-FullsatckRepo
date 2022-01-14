import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';




@NgModule({
  declarations: [
    EmployeeDetailsComponent,
    EmployeeListComponent,
    
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  exports:[ EmployeeDetailsComponent, EmployeeListComponent]
})
export class ModuleModule { }
