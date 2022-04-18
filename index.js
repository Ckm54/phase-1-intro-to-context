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

function createTimeInEvent(employeeRecord, timeStamp) {
    const hour = parseInt(timeStamp.split(" ")[1])
    const date = timeStamp.split(" ")[0]
    const timeObj = {
        type: "TimeIn",
        hour: hour,
        date: date
    }
    employeeRecord["timeInEvents"].push(timeObj)
    return employeeRecord;
}

function createTimeOutEvent(employeeRecord, timeStamp) {
    const hour = parseInt(timeStamp.split(" ")[1])
    const date = timeStamp.split(" ")[0]
    const timeObj = {
        type: "TimeOut",
        hour: hour,
        date: date
    }
    employeeRecord["timeOutEvents"].push(timeObj)
    return employeeRecord;
}

function hoursWorkedOnDate(employeerecord, date) {
    const timeIn = getHours(employeerecord.timeInEvents, date)
    const timeOut = getHours(employeerecord.timeOutEvents, date)
    console.log(timeOut - timeIn)
}

function getHours(arr, date){
    for(let i=0; i<arr.length; i++) {
        if(arr[i].date === date){
            return arr[i].hour
        }
    }
}

