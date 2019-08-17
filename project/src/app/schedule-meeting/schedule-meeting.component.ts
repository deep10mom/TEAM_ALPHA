import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-meeting',
  templateUrl: './schedule-meeting.component.html',
  styleUrls: ['./schedule-meeting.component.css']
})
export class ScheduleMeetingComponent implements OnInit {

  constructor() { }
  /*
  Name:string[]=["Project 1"];
  Time:string[]=["10:00"];
  Date:string[]=["10-10-19"];
  add(pName,pTime,pDate){
    this.Name.push(pName);
    this.Time.push(pTime);
    this.Date.push(pDate);
  }*/
 Empname:string[]=["deepa"];
 Empid:number[]=[6788];
 meeting_details =[{project:'pro 1',meeting_venue:'hyatt',meeting_login_time:'8:00',meeting_logout_time:'10:00'}];
 d = new Date();



//Function for scheduling a meeting
add(Project:string,Meeting_venue:string,Meeting_login_time:string,Meeting_logout_time:string,employee_id, empname)
{
   this.meeting_details.push({project:Project,meeting_venue:Meeting_venue,meeting_login_time:Meeting_login_time,meeting_logout_time:Meeting_logout_time});
   this.Empid.push(employee_id);
  this.Empname.push(empname);
}

emp_details(employee_id, empname) {
  
}




  ngOnInit() {
  }

}
