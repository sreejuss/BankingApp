import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { EditComponent } from './edit/edit.component';
import {FormsModule} from '@angular/forms'
import { LoginComponent } from './login/login.component';
import { AuthGuard } from '../shared/authentication/auth.guard';

const routes: Routes = [
  {path:"add",component:AddComponent,canActivate:[AuthGuard]},
  {path:"admin-dash",component:AdminDashComponent,canActivate:[AuthGuard]},
  {path:"edit/:id",component:EditComponent,canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent}
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
