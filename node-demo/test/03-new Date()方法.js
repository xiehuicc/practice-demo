function getDeviceParam(floor) {
    let startTime = new Date()
    startTime.setHours(0)
    startTime.setMinutes(0)
    startTime.setSeconds(0)
    let endTime = new Date()
    endTime.setHours(24)
    endTime.setMinutes(0)
    endTime.setSeconds(0)
    console.log(startTime)
    console.log(endTime) 
}

console.log(getDeviceParam('2F'))