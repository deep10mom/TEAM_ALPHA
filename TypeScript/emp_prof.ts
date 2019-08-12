
class Employee{

public Empno:number;
public Empname:string;
public Phonenumber:string;
public Projectsassigned:any[]=[];

constructor(pEmpno:number,pEmpname:string,pPhonenumber:string,pProjects:any[])
{this.Empno=pEmpno;
    this.Empname=pEmpname;
    this.Phonenumber=pPhonenumber;
    var len = pProjects.length; 
    for (var i = 0; i < len; i++) 
    {
     //this.projectsassigned.push({projects[i].proj_name,projects[i].given_time});
     this.Projectsassigned.push(pProjects[i]);
    }

}

 public add_emp_details(pEmpno:number,pEmpname:string,pPhonenumber:string,pProjects:any[]){
    this.Empno=pEmpno;
    this.Empname=pEmpname;
    this.Phonenumber=pPhonenumber;
    var len = pProjects.length; 
    for (var i = 0; i < len; i++) 
    {
     //this.projectsassigned.push({projects[i].proj_name,projects[i].given_time});
     this.Projectsassigned.push(pProjects[i]);
    }


    
}
    public display_details()
{
    console.log("Employee no:");
    console.log(this.Empno);
    console.log("Employee name:");
    console.log(this.Empname);
    console.log("Employee Phonenumber:");
    console.log(this.Phonenumber);
    console.log("projects assigned to him/her");
    console.log(this.Projectsassigned);
}
public get_emp_projects()
{
     var len:number = this.Projectsassigned.length;
for (var i = 0; i < len; i++)
{
console.log( this.Projectsassigned[i]) ;
//console.log(projectsassigned[i].given_time) ;

}


}
public add_project(pProject_name:string,pTime:string)
{
    this.Projectsassigned.push({pProject_name,pTime});
}










}
var object:Employee=new Employee(1234,"vasavi","8639649384",[{proj_name:"login",given_time:"2 hours"},{proj_name:"signup",given_time:"3 hours"}]);
//object.add_emp_details(1234,"vasavi","8639649384",[{proj_name:"login",given_time:"2 hours"},{proj_name:"signup",given_time:"3 hours"}]);

console.log("Employee details:")
object.display_details();
console.log("Projects assigned to him/her:")
object.get_emp_projects();
console.log("adding project to the employee:")

object.add_project("task1","4 hours");
console.log("updated projects list:")
object.get_emp_projects();
















