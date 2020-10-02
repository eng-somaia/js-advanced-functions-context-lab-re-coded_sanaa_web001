/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let createEmployeeRecord = (x) =>{
  let timeIn = [];
  let timeOut = [];
  let obj = {
    firstName: x[0],
    familyName: x[1],
    title: x[2],
    payPerHour: x[3],
    timeInEvents: timeIn,
    timeOutEvents: timeOut
  }
  return obj;
}
let createEmployeeRecords = (x) => {

  let newArray = x.map(createEmployeeRecord);
  return newArray;
}
let createTimeInEvent = (y) => {
  let z = Array.from(y);
  let date1 = z.slice(0,10);
  date1 = date1.join("");
  let hour1 = z.slice(11,15);
  hour1 = parseInt(hour1.join(""),10);
  let obj2 = {
    type: "TimeIn",
    hour: hour1,
    date: date1
  }
  this.timeInEvents.push(obj2);
return this;
}
function createTimeOutEvent(y){
  let z = Array.from(y);
  let date1 = z.slice(0,10);
  date1 = date1.join("");
  let hour1 = z.slice(11,15);
  hour1 = parseInt(hour1.join(""),10);
  let obj2 = {
    type: "TimeOut",
    hour: hour1,
    date: date1
  }
  this.timeOutEvents.push(obj2);
return this;
}

}

function hoursWorkedOnDate(y){
  let z=0;
  if (y === this.timeOutEvents[0].date)
   z = (this.timeOutEvents[0].hour)/100 - (x.timeInEvents[0].hour)/100;
    return z;
   }

function wagesEarnedOnDate(b){
  let z=0;
  if (b === this.timeOutEvents[0].date)
 z = hoursWorkedOnDate.call(this,b) * this.payPerHour;
 return z;
}



let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
function findEmployeeByFirstName(i,j){
return  i.find(ele => ele.firstName === j)

}

function calculatePayroll(v){
   let z = v.reduce((accum, sum) =>  accum + allWagesFor(sum),0)
return z;
}
