// Created function to display the time and date. Updated evry 100ms so the function loads faster
// =================================================================
setInterval (function getTime() {
var time = moment().format("HH:mm:ss")
var date = moment().format("MMM Do, YYYY")
$("#time").text("Today is " + date + ". The current time is " + time)
}, 100)