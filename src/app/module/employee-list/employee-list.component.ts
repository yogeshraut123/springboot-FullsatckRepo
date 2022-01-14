import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { CommonService } from 'src/app/Shared/common.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private s:CommonService) { }
  emplist!:Employee[];

  ngOnInit(): void 
  {
    this.s.getdata().subscribe((data:Employee[])=>
     this.emplist=data)

  }
  deletedata(id:number)
  {
    this.s.deletedata(id).subscribe();
  }
  editdata(emp:Employee)
  {
    this.s.x=true;
    this.s.c="update";
   this.s.e=Object.assign({},emp);
  }

}
