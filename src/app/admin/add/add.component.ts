import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserServService } from 'src/app/shared/service/user-serv.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  empObj1:any=[];
  constructor(private _empSer:UserServService,private _router:Router) {    
   }
  ngOnInit(): void {

  }
  createAccount(val:any){

    const empObj1={
      id: val.id,
      name: val.name,
      balance:val.balance ,
      city:val.city ,
      state:val.state ,
      pincode:val.pincode ,
      status: "Active",
      type:val.type,
     
      email:val.email,
      password:val.email
    }
    this._empSer.createAccount(empObj1).subscribe(()=>{
      alert("data added successfully")
      this._router.navigate(['/admin/admin-dash']) // automatic redirection after adding value
    })

  }
}

