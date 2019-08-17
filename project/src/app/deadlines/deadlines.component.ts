import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-deadlines',
  templateUrl: './deadlines.component.html',
  styleUrls: ['./deadlines.component.css']
})
export class DeadlinesComponent implements OnInit {

  constructor() { }
  employeename:string;
  empid:number;
  projects:any[]=[{projectName:'',remarks:'',timetaken:''}];
  tasks=[{taskname:'signup',timeallocated:'4hrs',status:'completed'},
  {taskname:'login',timeallocated:'4hrs',status:'completed'}
  ,{taskname:'signup',timeallocated:'4hrs',status:'completed'}
  ,{taskname:'signup',timeallocated:'4hrs',status:'completed'}
];
  ngOnInit() {
  }
  addTasks(pTaskname:string,pTime:string,pStats:string){
   this.tasks.push({taskname:pTaskname,timeallocated:pTime,status:pStats})
  }
     showTasks(){
       console.log(this.tasks);
     }
     completeTask(pTaskname:string){
      for(var i=0;i<this.tasks.length;i++)
      {
          if(this.tasks[i].taskname==pTaskname)
          {
              this.tasks[i].status= "completed";
              //this.tasks[i].t
          }
      }
     }

}
