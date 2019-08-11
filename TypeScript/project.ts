class projects{

    public employeename:string;
    public empid:string;
    private projectsDone =[{
        projectName: '',
        remarks:'',
        timetaken:''
    }];
    
    public tasks=[
        {
    taskname:"",
    timeallocated:"",
    status:""
    }];
    
    //functions
    
    
 public addTasks(tname:string,time:string,stats:string) {
       
       this.tasks.push({taskname:tname,timeallocated:time,status:stats});
        // tasks.timeallocated=time;
        // tasks.status=status;
 //   return 
    }
    public showTasks(){
        console.log(this.tasks);
    }
    
    public completeTask(task:string){
    
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
    
    var objp:projects= new projects();
    objp.addTasks("login","2 hrs","not completed");
    objp.addTasks("signup","3 hrs"," not completed");
    objp.showTasks();
    console.log("*********************after completing login task**********************");
    objp.completeTask("login");
    objp.showTasks();
    