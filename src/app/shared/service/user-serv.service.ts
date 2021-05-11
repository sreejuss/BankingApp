import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adminLoginUrl, baseUrl } from '../constant/constant';
import { IAdmin } from '../interface/admin.modal';
import { IUser } from '../interface/user.modal';

@Injectable({
  providedIn: 'root'
})
export class UserServService {
  
  updateAccount(emp:any){
    const url:string=`${baseUrl}`;
    return this._http.put(url,emp);
  }

  getSingleRecord(courseId:number){
    const url:string=`${baseUrl}/${courseId}`;
    return this._http.get<IUser>(url);
  }

  // getSingleRecordofUser(courseId:number){
  //   const url:string=`${baseUrl}/${courseId}`;
  //   return this._http.get<IUser>(url);
  // }

  createAccount(emp:any){
    return this._http.post(baseUrl,emp)
  }
  signin(user:any){
    sessionStorage.setItem("user",user);
  }
  signout(){
    sessionStorage.removeItem("user");
  }

  

  constructor(private _http:HttpClient) { }
  getAllRecord():Observable<IUser[]>{
    return this._http.get<IUser[]>(baseUrl);
  }


  
  getLoginCredential(){
    return this._http.get<IAdmin[]>(adminLoginUrl);
  }


  getUserLoginCredential(){
    return this._http.get<IUser[]>(baseUrl);
  }

}
