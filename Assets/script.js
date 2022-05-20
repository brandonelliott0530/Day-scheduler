var hours = [
    document.getElementById("8am"),
    document.getElementById("9am"),
    document.getElementById("10pm"),
    document.getElementById("11am"),
    document.getElementById("12pm"),
    document.getElementById("1pm"),
    document.getElementById("2pm"),
    document.getElementById("3pm"),
    document.getElementById("4pm"),
    document.getElementById("5pm")
]

// Created function to display the time and date, compare the current hour with the hour id's and change properties accordingly
// So far, I haven't found out how to make the function work while checking the array of hours. I understand that this code is not "DRY"
// But it is working. I will keep thinking about it and see if I find a solution to shorten the code.
// =================================================================
setInterval (function getTime() {
    
// these variables are used in the heading at the top to display the time and date
// =================================================================
var time = moment().format("hh:mm a")
var date = moment().format("MMM Do, YYYY")

// This variable is used to compare the current hour to the hours in the planner
// =================================
var hour = moment().format("ha")

// IF the hour is 8am, make the background color of the input area "warning", change the text to dark, and make it bold, as well as take away the primary class
// ===========================================================================================

if (hour == "8am") {
    document.getElementById("8am").classList.add("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("8am").classList.remove("bg-primary")

// This is where I do the same as above for the current hour, and change the classes of the previous hour(s)
// ===========================================================================================

} else if (hour == "9am") {
    document.getElementById("9am").classList.add("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("9am").classList.remove("bg-primary")
    document.getElementById("8am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("8am").classList.add("bg-secondary", "font-weight-bold")


} else if (hour == "10am") {
    document.getElementById("10am").classList.add("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("10am").classList.remove("bg-primary")
    document.getElementById("8am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("8am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("9am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("9am").classList.add("bg-secondary", "font-weight-bold")

} else if (hour == "11am") {
    document.getElementById("11am").classList.add("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("11am").classList.remove("bg-primary")
    document.getElementById("8am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("8am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("9am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("9am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("10am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("10am").classList.add("bg-secondary", "font-weight-bold")
} else if (hour == "12pm") {
    document.getElementById("12pm").classList.add("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("12pm").classList.remove("bg-primary")
    document.getElementById("8am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("8am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("9am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("9am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("10am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("10am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("11am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("11am").classList.add("bg-secondary", "font-weight-bold")
} else if (hour == "1pm") {
    document.getElementById("1pm").classList.add("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("1pm").classList.remove("bg-primary")
    document.getElementById("8am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("8am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("9am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("9am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("10am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("10am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("11am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("11am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("12pm").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("12pm").classList.add("bg-secondary", "font-weight-bold")
} else if (hour == "2pm") {
    document.getElementById("2pm").classList.add("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("2pm").classList.remove("bg-primary")
    document.getElementById("8am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("8am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("9am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("9am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("10am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("10am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("11am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("11am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("12pm").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("12pm").classList.add("bg-secondary", "font-weight-bold")         
    document.getElementById("1pm").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("1pm").classList.add("bg-secondary", "font-weight-bold")
} else if (hour == "3pm") {
    document.getElementById("3pm").classList.add("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("3pm").classList.remove("bg-primary")
    document.getElementById("8am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("8am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("9am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("9am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("10am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("10am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("11am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("11am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("12pm").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("12pm").classList.add("bg-secondary", "font-weight-bold")         
    document.getElementById("1pm").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("1pm").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("2pm").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("2pm").classList.add("bg-secondary", "font-weight-bold")
} else if (hour == "4pm") {
    document.getElementById("4pm").classList.add("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("4pm").classList.remove("bg-primary")
    document.getElementById("8am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("8am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("9am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("9am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("10am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("10am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("11am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("11am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("12pm").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("12pm").classList.add("bg-secondary", "font-weight-bold")         
    document.getElementById("1pm").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("1pm").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("2pm").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("2pm").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("3pm").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("3pm").classList.add("bg-secondary", "font-weight-bold")
} else if (hour == "5pm") {
    document.getElementById("5pm").classList.add("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("5pm").classList.remove("bg-primary")
    document.getElementById("8am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("8am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("9am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("9am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("10am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("10am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("11am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("11am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("12pm").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("12pm").classList.add("bg-secondary", "font-weight-bold")         
    document.getElementById("1pm").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("1pm").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("2pm").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("2pm").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("3pm").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("3pm").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("4pm").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("4pm").classList.add("bg-secondary", "font-weight-bold")
} else {
    document.getElementById("5pm").classList.add("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("5pm").classList.remove("bg-primary")
    document.getElementById("8am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("8am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("9am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("9am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("10am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("10am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("11am").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("11am").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("12pm").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("12pm").classList.add("bg-secondary", "font-weight-bold")         
    document.getElementById("1pm").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("1pm").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("2pm").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("2pm").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("3pm").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("3pm").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("4pm").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("4pm").classList.add("bg-secondary", "font-weight-bold")
    document.getElementById("5pm").classList.remove("bg-warning", "text-dark", "font-weight-bold")
    document.getElementById("5pm").classList.add("bg-secondary", "font-weight-bold")

}
console.log(hour)
$("#time").text("Today is " + date + ". The current time is " + time)

// This function is called every second
// ====================

},1000)

// TODO: Set the input as JSON in localstorage, and then set it as the content on reload
// ================================================================













