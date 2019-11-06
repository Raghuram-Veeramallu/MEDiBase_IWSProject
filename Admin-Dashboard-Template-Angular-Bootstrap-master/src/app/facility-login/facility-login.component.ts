import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
//import { ToastrService } from "ngx-toastr";
//import { RecordsService } from '../shared/services/records.service';



@Component({
  selector: 'app-root',
  templateUrl: './facility-login.component.html',
  styleUrls: ['./facility-login.component.scss']
})
export class FacilityLoginComponent {
  
  @ViewChild('f', { static: false }) signupForm: NgForm;
  error: boolean=false;
  constructor(
   // private toastService: ToastrService,
    private router: Router,
  
    //private records: RecordsService
  ) {
    //this.records.run();
  }
  institute = {
    facilityId: '',
    facilityPasskey: ''
  };
  

  instituteLogin(instForm: NgForm){
    console.log("Going from facility to login");
    
    console.log(instForm.value);
   if(instForm.value['facilityId']=="akhilesh@snu.edu.in" && instForm.value['facilityPasskey']=="akhilesh")
    {this.router.navigateByUrl('/login/olduser');}
    else
    this.error=true;
  }
  
  newUser(){
    this.router.navigateByUrl('/login/newuser');
  }
  
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  
}