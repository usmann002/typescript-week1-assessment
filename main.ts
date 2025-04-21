// // console.log("hello world");
// //creating the employee interface
// interface Employee  {
// id:number,
// Ename:string,
// role:string,
// intern:boolean
// }

// const employees : Employee=[
//     {
//         id:1,
//         Ename:"usman",
//         role:"developer",
//         intern:true,
//     },
//     {
//         id:2,
//         Ename:"salman",
//         role:"designer",
//         intern:false
//     },
//     {
//         id:3,
//         Ename:"kashmir",
//         role:"manager",
//         intern:true
//     }

// ];

// function empDetail(employees[]):Employee{
// if(employees.intern == true){
//     console.log(employees.name);
//     console.log(employees.role);
// }
// }

// //enum
// enum projectStatus {"pending","InProgress", "completed" };

// //
// interface Project<T>{
//     name:string,
//     status:boolean,
//     data:T;
// }

// const myArr:Project<string []> [
//     technologies:[

//     ]
// ]



interface Employee {
    id:number,
    name:string,
    role:"developer" | "designer" | "manager",
    isIntern: boolean
}
const employees:Employee[]=[
    {
        id:1,
        name:"usman",
        role:"developer",
        isIntern:true,
    },
    {
        id:2,
        name:"salman",
        role:"designer",
        isIntern:false,
    },
    {
        id:3,
        name:"haiparbat",
        role:"manager",
        isIntern:true,
    },
];
function logIntern(isEmployee:Employee[]):void{
    for(const employe of isEmployee){
        if(employe.isIntern){
            console.log(`${employe.name} and role ${employe.role}`);
        }
    }
}
logIntern(employees);

//enum
enum projectStatus{
Pending= "isPending",
Inprogress = "inProgress",
completed = "Completed",

}

//generic interface
interface Project<T>{
    name:string,
    status:projectStatus,
    data:T,
}
const stringProject:Project<string[]> = {
    name:"E-commerce",
    status:projectStatus.Inprogress,
    data: ["react", "node", "php"],
};
console.log(stringProject);