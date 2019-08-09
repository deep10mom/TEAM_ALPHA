function employee()
{
this.empno="";
this.empname="";
this.phonenumber="";
this.projectsassigned=[];
this.add_emp_details=function(empno,empname,phonenumber,projects){
    this.empno=empno;
    this.empname=empname;
    this.phonenumber=phonenumber;
    var len = projects.length; 
    for (var i = 0; i < len; i++) 
{
//this.projectsassigned.push({projects[i].proj_name,projects[i].given_time});
this.projectsassigned.push(projects[i]);
}
   
}
this.display_details=function()
{
    console.log("Employee no:");
    console.log(this.empno);
    console.log("Employee name:");
    console.log(this.empname);
    console.log("Employee Phonenumber:");
    console.log(this.phonenumber);
    console.log("projects assigned to him/her");
    console.log(this.projectsassigned);
}
this.get_emp_projects=function()
{ 
     var len = this.projectsassigned.length; 
for (var i = 0; i < len; i++) 
{
console.log( this.projectsassigned[i]) ;
//console.log(projectsassigned[i].given_time) ;

}


}
this.add_project=function(project_name,time)
{
    this.projectsassigned.push({project_name,time});
}
}

var obj=new employee();

obj.add_emp_details("1234","vasavi","8465998489",[{proj_name:"login",given_time:"2 hours"},{proj_name:"signup",given_time:"3 hours"}]);
console.log("Employee details:")
obj.display_details();
console.log("Projects assigned to him/her:")
obj.get_emp_projects();
console.log("adding project to the employee:")

obj.add_project("task1","4 hours");
console.log("updated projects list:")
obj.get_emp_projects();