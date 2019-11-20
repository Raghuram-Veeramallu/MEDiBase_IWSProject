
import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import * as $ from 'jquery';
import { User } from 'src/app/shared/models/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service'
 
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.scss']
})

export class NewuserComponent implements OnInit {

  @ViewChild("video", {static: false})
  public video: ElementRef;
  @ViewChild('f', { static: false }) signupForm: NgForm;
  @ViewChild("canvas", {static: false})
  public canvas: ElementRef;

  public image: any;
  private router:Router;
  private datad: string;
  isShow=false;
  gend:string;

  constructor(
    private userService: UserService,
    private authenticationService:AuthenticationService,
    public af:AngularFireAuth
  ) {  }
  institutes = {
    patient: '',
    phoneno: '',
    aadhar:'',
    gender:'',
    height:'',
    weight:'',
    location:'',
    blood:'',
    age:'',
    email:''
  };
  youMethodName(model: any) {
     this.gend=model;
    }
  instituteLogins(instaForm: NgForm){
    //console.log("Entered new patient");
    console.log(instaForm.value);
    
    this.authenticationService.SignUp(this.institutes.email,"123456");
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user.uid); // User is signed in.
      } else {
        // No user is signed in.
      }
    });
    
    //this.login();
    this.addToServer("rTHDf5bLW0SjpMAndIAOxQEXxgB3");
    this.addUser(instaForm.value['phoneno'],instaForm.value["patient"],instaForm.value['aadhar'],instaForm.value["blood"],this.gend,instaForm.value["height"],instaForm.value["weight"],instaForm.value["location"],instaForm.value["age"],instaForm.value["email"]);
    
  }
  
  ngOnInit(){
    //this.canvas.nativeElement.getContext("2d").drawImage("../../../assets/img/default\ dp.png",0,0,360,240);
  }
 
  public ngAfterViewInit() {
    
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
            this.video.nativeElement.srcObject = stream;
            this.video.nativeElement.play();

        });
    
      }
      
  }
  
   public try()
   {
    this.isShow=!this.isShow; 
   }
   public leave(){
    this.router.navigateByUrl('http://localhost:4200/home/dashboard');
    //routerLink="../../home/dashboard"
   }
  public capture() {
    this.isShow=!this.isShow;
    //var uid = (document.getElementById("aadhar") as HTMLInputElement).value;
    this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0,360, 240);
    this.image = this.canvas.nativeElement.toDataURL("image/png");
  }

  addToServer(uid:string){
    this.datad = "{\r\n    \"image\":\"" + this.image + "\",\r\n    \"subject_id\":\"" + uid + "\",\r\n    \"gallery_name\":\"temp\"\r\n}";
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api.kairos.com/enroll",
      "method": "POST",
      "headers": {
          "content-type": "application/json",
          "app_id": "744ed0da",
          "app_key": "291ab2350e2e88feca76ac97e6dfafa6",
          "cache-control": "no-cache"
      },
      "processData": false,
      "data": this.datad
    }

    $.ajax(settings).done(function (response) {
      if((response.images[0].transaction.status) == "success"){
          console.log("trained successfully by name "+response.images[0].transaction.subject_id+ " in gallery name " +response.images[0].transaction.gallery_name);
      }
      else{
          console.log("failure");
      }
    });
  }


  addUser(uid: string, name: string, mobile: string,blood:string,gender:string,height:string,weight:string,location:string,age:string,email:string){
    var user = new User();
    user.uid = uid;
    user.name = name;
    user.mobile = mobile;
    user.blood=blood;
    user.gender=gender;
    user.height=height;
    user.weight=weight;
    user.location=location;
    user.age=age;
    user.email=email;
    this.userService.createUser(user);
  }




}
