import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServService } from '../../shared/service/user-serv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uid:string="";
  upass:string="";
  adminData:any=[];

  constructor(private adminServ:UserServService,private _router:Router) { }

  ngOnInit(): void {
  }

  checkData(){
    this.adminServ.getLoginCredential().subscribe((res)=>{
      this.adminData=res;
      const data=this.adminData.filter((item:any)=>(item.uid==this.uid)&&(item.upass==this.upass));
      if(data.length>0){
        this.adminServ.signin(this.uid)
        this._router.navigate(['admin/admin-dash'])
      }else{
        alert("invalid login credentials");
        this.uid="";
        this.upass="";
      }
    })
  
  }

}
