import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   // email
   email = new FormControl('', [Validators.required, Validators.email]);
   getErrorMessage1() {
     if (this.email.hasError('required')) {
       return 'You must enter a valid email';
     }
     return this.email.hasError('email') ? 'Not a valid email' : '';
   }
 
   // password
   hide = true; //icon
   password = new FormControl('', [Validators.required]);
   getErrorMessage2() {
     if (this.password.hasError('required')) {
       return 'You must enter a valid password';
     }
     return this.password.hasError('password') ? 'Not a valid password' : '';
   }
  constructor() { }

  ngOnInit(): void {
  }
  userEnteredDetails:any = [];
  onSubmission(formObject:NgForm){
    console.log(formObject);
    this.userEnteredDetails.push({'email': formObject.value.email, 'password': formObject.value.password})
    console.log("array", this.userEnteredDetails);
  }
}
