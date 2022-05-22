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

// TODO: Set the input as JSON in localstorage, and then get it as the content on reload
// ================================================================

var saveBtn = document.getElementById("save")

var input8 = document.getElementById("8am")
var input9 = document.getElementById("9am")
var input10 = document.getElementById("10am")
var input11 = document.getElementById("11am")
var input12 = document.getElementById("12pm")
var input1 = document.getElementById("1pm")
var input2 = document.getElementById("2pm")
var input3 = document.getElementById("3pm")
var input4 = document.getElementById("4pm")
var input5 = document.getElementById("5pm")

saveBtn.addEventListener("click", saveItems)

// This function sets the value of the input as the object in localstorage

function saveItems() {
    localStorage.setItem("8am", input8.value)
    localStorage.setItem("9am", input9.value)
    localStorage.setItem("10am", input10.value)
    localStorage.setItem("11am", input11.value)
    localStorage.setItem("12pm", input12.value)
    localStorage.setItem("1pm", input1.value)
    localStorage.setItem("2pm", input2.value)
    localStorage.setItem("3pm", input3.value)
    localStorage.setItem("4pm", input4.value)
    localStorage.setItem("5pm", input5.value)
    
}
// This function should render the value in localstorage
// Still very repetative, but I am running out of time for the project before I need to submit it. 
// ================================================================

render()
function render() {
    
    var hour8 = localStorage.getItem("8am")
    document.getElementById("8am").value = hour8
    var hour9 = localStorage.getItem("9am")
    document.getElementById("9am").value = hour9
    var hour10 = localStorage.getItem("10am")
    document.getElementById("10am").value = hour10
    var hour11 = localStorage.getItem("11am")
    document.getElementById("11am").value = hour11
    var hour12 = localStorage.getItem("12pm")
    document.getElementById("12pm").value = hour12
    var hour1 = localStorage.getItem("1pm")
    document.getElementById("1pm").value = hour1
    var hour2 = localStorage.getItem("2pm")
    document.getElementById("2pm").value = hour2
    var hour3 = localStorage.getItem("3pm")
    document.getElementById("3pm").value = hour3
    var hour4 = localStorage.getItem("4pm")
    document.getElementById("4pm").value = hour4
    var hour5 = localStorage.getItem("5pm")
    document.getElementById("5pm").value = hour5
}


    
    











