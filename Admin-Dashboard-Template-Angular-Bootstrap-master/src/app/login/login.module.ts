
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { LoginRoutingModule } from './login.routing';
import { LoginComponent } from './login.component';
import { ViewsModule } from '../home/views/views.module';
import { OlduserComponent } from './olduser/olduser.component';
import { NewuserComponent } from './newuser/newuser.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    LoginComponent,
    OlduserComponent,
    NewuserComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ViewsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
})

export class LoginModule { }
