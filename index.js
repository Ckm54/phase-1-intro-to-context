function createEmployeeRecord(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arr) {
    let employeeArr = []
    for(let i=0; i<arr.length; i++){
        let data = createEmployeeRecord(arr[i])
        employeeArr.push(data)
    }
    return employeeArr
}
