
//Calendar date information
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY, h:mm "));

//variable per time slot
var btnNine = $('#hour-9');
var btnTen = $('#hour-10');
var btnEleven = $('#hour-11');
var btnTwelve= $('#hour-12');
var btnOne = $('#hour-1');
var btnTwo = $('#hour-2');
var btnThree = $('#hour-3');
var btnFour = $('#hour-4');
var btnFive = $('#hour-5');
var currentHour = moment().format("HH");
console.log(currentHour);


// outline color of time slots as web page opens
var textInfo9 = $('#text-9');
var textInfo10 = $('#text-10');
var textInfo11 = $('#text-11');
var textInfo12 = $('#text-12');
var textInfo1 = $('#text-1');
var textInfo2 = $('#text-2');
var textInfo3 = $('#text-3');
var textInfo4 = $('#text-4');
var textInfo5 = $('#text-5');

var btnAll = $(".saveBtn");










btnNine.on('click', function() {

} )
// assign past time slots to the grey color

// assign present time slots the red color

// assign future time slots the gree color 

// save button 

// save button saves scheduled task

// the task is saved onto the page even after refreshing the web page