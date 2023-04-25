// Write your solution in this file!
const employee = {"name":"Hansel Glutton", "address":"123 Edge of the Woods"}

function updateEmployeeWithKeyAndValue(employee,key,value){
    const newEmployeeData = {...employee}
    newEmployeeData[key] = value
    return newEmployeeData
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const cloneEmployee = {...employee}
    delete cloneEmployee[key]
    return cloneEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee   
}