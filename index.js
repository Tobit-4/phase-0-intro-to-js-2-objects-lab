// Write your solution in this file!
const employee = {
    name: 'Max',
    streetAddress: '10 Broadway',
}
function updateEmployeeWithKeyAndValue (employee, name, streetAddress){
    const newEmployee = {...employee}
    newEmployee[name] = 'Sam';
    newEmployee[name] = '11 Broadway';
    return newEmployee;

}
function destructivelyUpdateEmployeeWithKeyAndValue(newEmployee, streetAddress,){
    newEmployee[streetAddress] = '12 Broadway';
    
    return employee;
    
}
function destructivelyDeleteFromEmployeeByKey(newEmployee, name){
    delete newEmployee.name;
    return employee
}
function deleteFromEmployeeByKey(employee, name){
    const newEmployee = {...employee}
    delete newEmployee.name;
    return newEmployee;
}

