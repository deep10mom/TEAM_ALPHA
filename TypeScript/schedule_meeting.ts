var Empname:string[]=[];
var Empid:number[]=[];
var meeting_details =[{project:'',meeting_venue:'',meeting_login_time:'',meeting_logout_time:''}];
var d = new Date();
console.log(d.getHours());
if(d.getHours()==11)
{
    console.log("You had a scheduled meeting at this time")
}

//Function for scheduling a meeting
function meeting_schedule (Project:string,Meeting_venue:string,Meeting_login_time:string,Meeting_logout_time:string)
{
    meeting_details.push({project:Project,meeting_venue:Meeting_venue,meeting_login_time:Meeting_login_time,meeting_logout_time:Meeting_logout_time});
}
meeting_schedule("Time Management System   ","Hyatt   ","2019-08-13 11:30 AM","2019-08-13 12:30 PM");
meeting_schedule("Library Management Syetem","Oakwood   ","2019-08-13 11:30 AM","2019-08-13 12:30 PM");
meeting_schedule("New Joinee Management System","Hyatt-Istana 2","2019-08-13 11:30 AM","2019-08-13 12:30 PM");
meeting_schedule("Training Management System","Hyatt-Istana 1","2019-08-13 11:30 AM","2019-08-13 12:30 PM");
meeting_schedule("Travel Management System","Hyatt   ","2019-08-13 11:30 AM","2019-08-13 12:30 PM");

// Employee Details
    function emp_details(employee_id, empname) {
        Empid.push(employee_id);
        Empname.push(empname);
     }
    emp_details(491713, "Shoaib");
    emp_details(491723, "Deepa");
    emp_details(491733, "Captain");
    emp_details(491743, "Bhavita");
    emp_details(491753, "Vasavi");

    function Display_Schedule()
    {
        console.log("\n\n***************\t\tMeeting Schedule of the Employees\t***************\n\n")
        console.log("Employee Id\tEmployee Name\tProject Name\t\t\tMeeting Venue\tMeeting Login Time\tMeeting Logout Time");
        for (var i=0;i<Empid.length;i++)
        {
            console.log(Empid[i]+"\t\t"+Empname[i]+"\t\t"+meeting_details[i+1].project+"\t"+meeting_details[i+1].meeting_venue+"\t"+meeting_details[i+1].meeting_login_time+"\t"+meeting_details[i+1].meeting_logout_time);

        }
    }
    
//console.log(meeting_details[1].meeting_login_time)
Display_Schedule();