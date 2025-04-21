// console.log("hello world");
//creating the employee interface
interface Employee  {
id:number,
Ename:string,
role:string,
intern:boolean
}

const employees : Employee=[
    {
        id:1,
        Ename:"usman",
        role:"developer",
        intern:true,
    },
    {
        id:2,
        Ename:"salman",
        role:"designer",
        intern:false
    },
    {
        id:3,
        Ename:"kashmir",
        role:"manager",
        intern:true
    }

];

function empDetail(employees[]):Employee{
if(employees.intern == true){
    console.log(employees.name);
    console.log(employees.role);
}
}

//enum
enum projectStatus : ["pending","InProgress", "completed" ];

//
interface Project<T>{
    name:string,
    status:boolean,
    data:T;
}

const myArr:Project<string []> [
    technologies:[

    ]
]


