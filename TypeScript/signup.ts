var employee_details=[{
 employee_id:"",
 employee_name:""
}]
var employee_id:number[]=[];
var password:string[]=[];
var department:string[]=[];
var role:string[]=[];
var empname:string[]=[];
//Signup Function
function signup(Employee_id:number,Empname:string,Password:string,Department:string,Role:string)
{
    employee_id.push(Employee_id);
    empname.push(Empname);
    password.push(Password);
    department.push(Department);
    role.push(Role);
}
//signup([491734,490876],["deepa12","captain12"],["IBGT","IBGT"],["Technical Associate","Technical Associate"]);
signup(491713,"Shoaib12","shoaib12","IGBT","Technical Associate");
signup(491723,"DeepaKeshri12","deepa12","IGBT","Technology Associate");
signup(491733,"Captain12","captain12","IGBT","Technical Associate");
signup(491743,"Bhavitha12","bhavitha12","IGBT","Technology Associate");
signup(491753,"Vasavi12","vasavi12","IGBT","Technical Associate");

var display=function()
{
        console.log("Employee Name\t\tEmployee Id\tEmployee Department\tEmployee Role")
        for(var i=0;i<employee_id.length;i++)
        {
            console.log(empname[i]+"\t\t"+employee_id[i]+"\t\t"+department[i]+"\t\t\t"+role[i]);
        }
}
var obj1=new display();
//console.log(employee_id[1]);

  //  Empname.push("Shoaib");
   // employee_details.push({employee_id:"12",employee_name:"Shoaib"});
//console.log(employee_details);
//console.log(Empname[0]);