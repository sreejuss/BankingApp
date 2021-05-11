import { TemplateRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { UserServService } from 'src/app/shared/service/user-serv.service';
import {BsModalService} from 'ngx-bootstrap/modal'
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {

  usersArray:any=[];
  p:number=1;
  term:string="";
  reverse:boolean=true;
  order:string="";
  modalRef: any;


  constructor(private _service:UserServService,private modalService:BsModalService,private router:Router) { }

  ngOnInit(): void {
    this.fetchAllData();
  }

  fetchAllData(){
    this._service.getAllRecord().subscribe((res)=>{
      this.usersArray=res;
      console.log(this.usersArray);
      console.log(res);         
    })
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }




  changeOrder(val:any){
    if(val=="name"){
      this.order="name";
      this.reverse=!this.reverse;
    }
    else if(val=="accnumber"){
      this.order="accnumber";
      this.reverse=!this.reverse;
    }
  }

  logout(){
    if(confirm("Do you want to logout?")){
      this._service.signout();
      this.router.navigate(['/'])
    }
    
  }


}
