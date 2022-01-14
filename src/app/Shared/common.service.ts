import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService 
{

  url:string="http://localhost:9000/saveEmployee";
  url1:string="http://localhost:9000/getAllEmployee";
  url2:String="http://localhost:9000/delete/{eid}";
  url3:String="http://localhost:9000/editdata/{eid}";
  url4:String="http://localhost:9000/employee/{eid}";

  constructor(private http:HttpClient) { }
  x:boolean=false;
 c:string="submit";
e:Employee=
{
  eid:0,
  ename:"",
  email:"",
  mobile:"",
  
}
getdata():Observable<Employee[]>
{
  return this.http.get<Employee[]>(this.url1);
}

postdata(emp:Employee)
{
    return this.http.post(this.url,emp);
}
updatedata(emp:Employee)
{
  return this.http.put(this.url+"/"+emp.eid,emp);
}
deletedata(eid:number)
{
  return this.http.delete(this.url2+"/"+eid);
}


}
