function projectDeadlines(){

this.employeename;
this.empid;
this.projectsDone=[{
    projectName: '',
    remarks:'',
    timetaken:''
}];

this.tasks=[
    {
taskname:"",
timeallocated:"",
status:""
}];

//functions


this.addTasks=function(tname,time,stats) {
   
   this.tasks.push({taskname:tname,timeallocated:time,status:stats});
    // tasks.timeallocated=time;
    // tasks.status=status;

}
this.showTasks=function(){
    console.log(this.tasks);
}

this.completeTask= function(task){

for(var i=0;i<this.tasks.length;i++)
{
    if(this.tasks[i].taskname==task)
    {
        this.tasks[i].status= "completed";
        //this.tasks[i].t
    }
}
}



}

var obj= new projectDeadlines();
obj.addTasks("login","2 hrs","not completed");
obj.addTasks("signup","3 hrs"," not completed");
obj.showTasks();
console.log("*********************after completing login task**********************");
obj.completeTask("login");
obj.showTasks();












