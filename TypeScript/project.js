var projects = /** @class */ (function () {
    function projects() {
        this.projectsDone = [{
                projectName: '',
                remarks: '',
                timetaken: ''
            }];
        this.tasks = [
            {
                taskname: "",
                timeallocated: "",
                status: ""
            }
        ];
    }
    //functions
    projects.prototype.addTasks = function (tname, time, stats) {
        this.tasks.push({ taskname: tname, timeallocated: time, status: stats });
        // tasks.timeallocated=time;
        // tasks.status=status;
        //   return 
    };
    projects.prototype.showTasks = function () {
        console.log(this.tasks);
    };
    projects.prototype.completeTask = function (task) {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].taskname == task) {
                this.tasks[i].status = "completed";
                //this.tasks[i].t
            }
        }
    };
    return projects;
}());
var objp = new projects();
objp.addTasks("login", "2 hrs", "not completed");
objp.addTasks("signup", "3 hrs", " not completed");
objp.showTasks();
console.log("*********************after completing login task**********************");
objp.completeTask("login");
objp.showTasks();
