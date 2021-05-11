import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServService } from 'src/app/shared/service/user-serv.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uid:string="";
  upass:string="";
  userData:any=[];
  singleUserData:any=[];
  fid:number=0;

  constructor(private _serv:UserServService,private _router:Router,private _ActRoute:ActivatedRoute) { }

  ngOnInit(): void {}
  

  checkData(){
    
    this._serv.getUserLoginCredential().subscribe((res)=>{
      this.userData=res;
      console.log(this.userData);
      
      const data=this.userData.filter((item:any)=>(item.email==this.uid)&&(item.password==this.upass));
      console.log(this.uid)
      console.log(this.upass);
      
      if(data.length>0){
        this._serv.signin(this.uid)
        
        this._router.navigate(['users/user-dash'])
      }else{
        alert("invalid login credentials");
        this.uid="";
        this.upass="";
      }
     

  
    })
  }
}


