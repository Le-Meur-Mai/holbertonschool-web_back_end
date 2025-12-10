export default function createReportObject(employeesList) {
    const obj = {
        'allEmployees': employeesList,
        getNumberOfDepartments(...employeesList) {
            let number_of_departments = 1;
            for (let key of employeesList) {
                number_of_departments += 1;
            }
            return number_of_departments;
        },
    }
    return obj;
}
