export class LoginClass {

    empId: string[]=["Shoaib12","DeepaKeshri12","Captain12","Bhavitha12","Vasavi12"];
password: string[]=["shoaib12","deepa12","captain12","bhavitha12","vasavi12"];
 len=this.empId.length;

//Login Function
login(empid:string,pass:string) : boolean
{
    var count=0;
    for(var i=0;i<this.len;i++)
    {
        if(empid==this.empId[i] && pass==this.password[i])
        {
            count++;
            break;
        }
       
    }
    if(count==0)
    return false;
    else
    return true;
}
}
