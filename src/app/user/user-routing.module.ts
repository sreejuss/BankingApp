import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/authentication/auth.guard';
import { DepositComponent } from './deposit/deposit.component';
import { LoginComponent } from './login/login.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [

  {path:"deposit",component:DepositComponent,canActivate:[AuthGuard]},
  {path:"user-dash",component:UserDashComponent,canActivate:[AuthGuard]},
  {path:"withdraw",component:WithdrawComponent,canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
