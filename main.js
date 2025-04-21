// // console.log("hello world");
// //creating the employee interface
// interface Employee  {
// id:number,
// Ename:string,
// role:string,
// intern:boolean
// }
var employees = [
    {
        id: 1,
        name: "usman",
        role: "developer",
        isIntern: true,
    },
    {
        id: 2,
        name: "salman",
        role: "designer",
        isIntern: false,
    },
    {
        id: 3,
        name: "haiparbat",
        role: "manager",
        isIntern: true,
    },
];
function logIntern(isEmployee) {
    for (var _i = 0, isEmployee_1 = isEmployee; _i < isEmployee_1.length; _i++) {
        var employe = isEmployee_1[_i];
        if (employe.isIntern) {
            console.log("".concat(employe.name, " and role ").concat(employe.role));
        }
    }
}
logIntern(employees);
//enum
var projectStatus;
(function (projectStatus) {
    projectStatus["Pending"] = "isPending";
    projectStatus["Inprogress"] = "inProgress";
    projectStatus["completed"] = "Completed";
})(projectStatus || (projectStatus = {}));
var stringProject = {
    name: "E-commerce",
    status: projectStatus.Inprogress,
    data: ["react", "node", "php"],
};
console.log(stringProject);
