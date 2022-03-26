import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  users:any;
  constructor(private userService:UserService) { }
  
  ngOnInit(): void {
      this.userService.getUser().subscribe(data=>{
        this.users = data;
      },(err)=>{
        console.log("Unable to get data from URL" + err)
      })
  }

}
