export default function createReportObject(employeesList) {
    const obj = {
        allEmployees: {...employeesList},
        getNumberOfDepartments() {
            let number_of_departments = 0;
            for (const key in this.allEmployees) {
                number_of_departments += 1;
            }
            return number_of_departments;
        },
    }
    return obj;
}
