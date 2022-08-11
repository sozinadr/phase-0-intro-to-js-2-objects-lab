// Write your solution in this file!

const employee = {
    name: "Jonathan",
    streetAddress: "123 Hard St",
};

function updateEmployeeWithKeyAndValue(employee, name, value) {
    return {
        ...employee,
        [name]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value) {
    employee[name] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, name) {
    const newEmployee = {...employee };

    delete newEmployee.name;

    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;

    return employee;
}