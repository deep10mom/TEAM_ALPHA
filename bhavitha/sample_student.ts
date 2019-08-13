class student
{
    public name: string;
    public rno:number;
    public grade:string;

    constructor(name,rno,grade){

        this.name=name;
        this.rno=rno;
        this.grade=grade;
    }

    public showdetails(){
        console.log("student name:"+this.name+"\n"+"roll no:"+this.rno+"\ngrade:"+this.grade);
    }
}

var o1=new student("bhavitha",160115737008,"A");
o1.showdetails();