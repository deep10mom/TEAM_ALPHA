var empId: string[]=["Shoaib12","DeepaKeshri12","Captain12","Bhavitha12","Vasavi12"];
var password: string[]=["shoaib12","deepa12","captain12","bhavitha12","vasavi12"];
var len=empId.length;

//Login Function
function login(empid:string,pass:string) : string
{
    var count=0;
    for(var i=0;i<len;i++)
    {
        if(empid==empId[i] && pass==password[i])
        {
            count++;
            console.log("Welcome ! "+empid+"\nSuccesfully Logged In");
            break;
        }
       
    }
    if(count==0)
    console.log("Invalid Credentials")
    return "";
}
var obj= login("Shoaib12","shoaib12");
console.log(obj);