import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServService } from 'src/app/shared/service/user-serv.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:number=0;
  empObj:any;
  constructor(private _userServ:UserServService,private _route:Router, private _ActRoute:ActivatedRoute) { }
  ngOnInit(): void { 
  this._ActRoute.paramMap.subscribe((parm)=>{
    this.id=Number(parm.get('id'));
    console.log(this.id);
  });
  this._userServ.getSingleRecord(this.id).subscribe((res)=>{
    this.empObj={...res}
    console.log(this.empObj);      
  })}
  updateAccount(val:any){
    const empObj={
      id:this.id,
      name: val.name,
      accnumber:val.accnumber ,
      balance:val.balance ,
      city:val.city ,
      state:val.state ,
      pincode:val.pincode ,
      status: val.status,
      type:val.type,
      email:val.email,
      password:val.password
      
    }
    this._userServ.updateAccount(empObj).subscribe(()=>{
      alert("data updated successfully");
      this._route.navigate(['admin/admin-dash']);
    })
  }
}
