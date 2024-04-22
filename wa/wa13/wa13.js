// Problem #1
let employees = '{ "employees" : [' + '{"name":"Sam", "department":"Tech", "designation":"Manager", "salary":"40000", "raiseEligible":"true"},' + 
    '{"name":"Mary", "department":"Finance", "designation":"Trainee", "salary":"18500", "raiseEligible":"true"},' + 
    '{"name":"Bill", "department":"HR", "designation":"Executive", "salary":"21200", "raiseEligible":"false"} ] }';

const employeesArr = JSON.parse(employees);

console.log("-- Problem 1 --");
console.log("(name, department, designation, salary, raise status)");
for(let i = 0; i < employeesArr.employees.length; i++){
    console.log(employeesArr.employees[i].name + ", " + employeesArr.employees[i].department + ", " + employeesArr.employees[i].designation 
        + ", " + employeesArr.employees[i].salary + ", " + employeesArr.employees[i].raiseEligible);
}


// Problem #2
let company = '{ "companyName":"Tech Stars", "website":"www.techstars.site",' + '"employees" : [' + 
'{"name":"Sam", "department":"Tech", "designation":"Manager", "salary":40000, "raiseEligible":"true"},' + 
'{"name":"Mary", "department":"Finance", "designation":"Trainee", "salary":18500, "raiseEligible":"true"},' +
'{"name":"Bill", "department":"HR", "designation":"Executive", "salary":21200, "raiseEligible":"false"} ] }';

const wholeCompany = JSON.parse(company);

console.log(" ");
console.log("-- Problem 2 --");
console.log("(name, department, designation, salary, raise status)");
console.log(wholeCompany.companyName + ", " + wholeCompany.website);
console.log("Employees:");
for(let i = 0; i < wholeCompany.employees.length; i++){
    console.log(wholeCompany.employees[i].name + ", " + wholeCompany.employees[i].department + ", " + wholeCompany.employees[i].designation 
        + ", " + wholeCompany.employees[i].salary + ", " + wholeCompany.employees[i].raiseEligible);
}


// Problem #3
let newEmployee = '{"name":"Anna", "department":"Tech", "designation":"Executive", "salary":25600, "raiseEligible":"false"}';
const newEmp = JSON.parse(newEmployee);
wholeCompany.employees.push(newEmp);
employeesArr.employees.push(newEmp);

console.log(" ");
console.log("-- Problem 3 --");
console.log("(name, department, designation, salary, raise status)");
console.log("Updated JSON 1:");
for(let i = 0; i < employeesArr.employees.length; i++){
    console.log(employeesArr.employees[i].name + ", " + employeesArr.employees[i].department + ", " + employeesArr.employees[i].designation 
        + ", " + employeesArr.employees[i].salary + ", " + employeesArr.employees[i].raiseEligible);
}
console.log("Updated JSON 2:");
console.log(wholeCompany.companyName + ", " + wholeCompany.website);
for(let i = 0; i < wholeCompany.employees.length; i++){
    console.log(wholeCompany.employees[i].name + ", " + wholeCompany.employees[i].department + ", " + wholeCompany.employees[i].designation 
        + ", " + wholeCompany.employees[i].salary + ", " + wholeCompany.employees[i].raiseEligible);
}
// console.log(wholeCompany.employees[3].name + ", " + wholeCompany.employees[3].department + ", " + 
//     wholeCompany.employees[3].designation + ", " + wholeCompany.employees[3].salary + ", " +
//     wholeCompany.employees[3].raiseEligible);


// Problem #4
let total = 0;
for(let i = 0; i < wholeCompany.employees.length; i++){
    total += wholeCompany.employees[i].salary;
}
console.log(" ");
console.log("-- Problem 4 --");
console.log("Total Salary: $" + total);


// Problem #5
for(let i = 0; i < wholeCompany.employees.length; i++){
    if(wholeCompany.employees[i].raiseEligible == "true"){
        
        wholeCompany.employees[i].salary *= 1.10;
        wholeCompany.employees[i].raiseEligible = "false";
    }
}
console.log(" ");
console.log("-- Problem 5 --");
console.log("(name, updated salary, updated raise status)");
for(let i = 0; i < wholeCompany.employees.length; i++){
    console.log(wholeCompany.employees[i].name + ", " + wholeCompany.employees[i].salary + ", " + wholeCompany.employees[i].raiseEligible);
}


// Problem #6
let workHome = '{"wfh": "false"}';
const newProp = JSON.parse(workHome);
for(let i = 0; i < wholeCompany.employees.length; i++){
    wholeCompany.employees[i]['wfh'] = "false";
    if(wholeCompany.employees[i].name == "Anna" || wholeCompany.employees[i].name == "Sam"){
        wholeCompany.employees[i].wfh = "true";
    }
}

console.log(" ");
console.log("-- Problem 6 --");
console.log("(name, wfh status)");
for(let i = 0; i < wholeCompany.employees.length; i++){
    console.log(wholeCompany.employees[i].name + ", " + wholeCompany.employees[i].wfh);
}
