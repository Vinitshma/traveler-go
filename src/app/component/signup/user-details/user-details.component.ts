import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  value10: any;
  constructor() { }

  ngOnInit(): void {
  }

  // formSubmition
  submitionDetails:any=[];
  onSubmit(formObject:NgForm){
    console.log(formObject);
    this.submitionDetails.push({'fullName':formObject.value.fullName,'birthDate':formObject.value.birthDate,'genderDel':formObject.value.genderDel,'countryNam':formObject.value.countryNam,'phoneNum':formObject.value.phoneNum,'bioDesc':formObject.value.bioDesc})
    console.log("array",this.submitionDetails);
  }
}
