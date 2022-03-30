import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  
  addDetailsForm :FormGroup= new FormGroup({
    'search': new FormControl,
    'select1': new FormControl,
    'select2': new FormControl
  })

  userEnteredData:any=[];
  searchData(){
    console.log(this.addDetailsForm);
    this.userEnteredData.push({
      search:this.addDetailsForm.value.search,
      select1:this.addDetailsForm.value.select1,
      select2:this.addDetailsForm.value.select2
      })
      console.log(this.userEnteredData)
  }
}
