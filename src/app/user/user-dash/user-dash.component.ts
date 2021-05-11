import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServService } from 'src/app/shared/service/user-serv.service';
import {LoginComponent} from 'src/app/user/login/login.component';
@Component({
  selector: 'app-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.css']
})
export class UserDashComponent implements OnInit {
  
  id:number=0;
  empObj:any=[];
  userData:any=[];

  
  constructor(private _userSev:UserServService,private _route:Router,private _ActRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
  
    this._ActRoute.paramMap.subscribe((parm)=>{
      this.id=Number(parm.get('id'));
      console.log(this.id);
    });
    this._userSev.getSingleRecord(this.id).subscribe((res)=>{
      this.empObj={...res}
      console.log(this.empObj);      
    })}

  fetch(val:any){

  }

  logout(){
    if(confirm("Do you want to logout?")){
      this._userSev.signout();
      this._route.navigate(['/'])
    }
    
  }




}



