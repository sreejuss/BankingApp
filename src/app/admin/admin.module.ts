import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import {ModalModule} from 'ngx-bootstrap/modal'
import {NgxPaginationModule} from 'ngx-pagination'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [
    AdminDashComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule

  ]
})
export class AdminModule { }
