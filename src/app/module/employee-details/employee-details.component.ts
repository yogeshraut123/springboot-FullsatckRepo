import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { CommonService } from 'src/app/Shared/common.service';



@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {


  constructor(public s:CommonService) { }

  
  ngOnInit(): void 
  {

  }
  //  SaveEmployee(emp:Employee)
  //  {
  
  //   this.s.postdata(emp).subscribe();
  //    window.location.reload();

  // }
   submitdata(emp:Employee)
   {
     this.s.postdata(emp).subscribe();
     window.location.reload();
  }
  resetdata()
  {
    this.s.e=Object.assign({},null)
  }
 
}
