class ProjectDeadlines{


    constructor(){

    }
    public employeename:string;
    public empid: number;
    private projectsDone=[{
        projectName: '',
        remarks:'',
        timetaken:''
    }];
    
    private tasks=[
         {
    taskname:"",
    timeallocated:"", 
    status:""
    }]
     ;
    
    //functions
    
    
    public addTasks(tname,time,stats) {
       
       this.tasks.push({taskname:tname,timeallocated:time,status:stats});
        // tasks.timeallocated=time;
        // tasks.status=status;
    
    }
    public showTasks(){
        console.log(this.tasks);
    }
    
    public completeTask(task){
    
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
    
    var obj1= new ProjectDeadlines();
    obj1.addTasks("login","2 hrs","not completed");
    obj1.addTasks("signup","3 hrs"," not completed");
    obj1.showTasks();
    console.log("*********************after completing 'login task'**********************");
    obj1.completeTask("login");
    obj1.showTasks();
    
    
    
    
    
    
    
    
    
    
    
    
    