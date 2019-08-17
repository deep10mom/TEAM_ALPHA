import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.css']
})
export class EmployeeProfileComponent implements OnInit {
   Empno:number;
   Empname:string;
   Phonenumber:string;
   Projectsassigned:any[]=[];
projectname:string="";
timehours:string="";
show:boolean=false;
  constructor() {
    this.Empno=1234;
    this.Empname="Vasavi Katakam";
    this.Phonenumber="9948510380";
   }

  ngOnInit() {
  }


 
  
  // constructor(pEmpno:number,pEmpname:string,pPhonenumber:string,pProjects:any[])
  // {this.Empno=pEmpno;
  //     this.Empname=pEmpname;
  //     this.Phonenumber=pPhonenumber;
  //     var len = pProjects.length; 
  //     for (var i = 0; i < len; i++) 
  //     {
  //      //this.projectsassigned.push({projects[i].proj_name,projects[i].given_time});
  //      this.Projectsassigned.push(pProjects[i]);
  //     }
  
  // }
  
   /*public add_emp_details(pEmpno:number,pEmpname:string,pPhonenumber:string,pProjects:any[]){
      this.Empno=pEmpno;
      this.Empname=pEmpname;
      this.Phonenumber=pPhonenumber;
      var len = pProjects.length; 
      for (var i = 0; i < len; i++) 
      {
       //this.projectsassigned.push({projects[i].proj_name,projects[i].given_time});
       this.Projectsassigned.push(pProjects[i]);
      }
  
  
      
  }*/
    /*  public display_details()
  {
      console.log("Employee no:");
      console.log(this.Empno);
      console.log("Employee name:");
      console.log(this.Empname);
      console.log("Employee Phonenumber:");
      console.log(this.Phonenumber);
      console.log("projects assigned to him/her");
      console.log(this.Projectsassigned);
  }*/
  public get_emp_projects()
  {
       var len:number = this.Projectsassigned.length;
  for (var i = 0; i < len; i++)
  {
  console.log( this.Projectsassigned[i]) ;
  //console.log(projectsassigned[i].given_time) ;
  
  }
  
  
  }
  
  public addProjects()
  {
    this.Projectsassigned.push({proj:this.projectname,time:this.timehours});
    this.show=false;
  }
  
  submit()
  {
this.show=true;
  }
  
  
  
  
  
  
  
  }




