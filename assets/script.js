
//Calendar date information
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

//variable per time slot
var hour9 = $('#hour9');
var hour10 = $('#hour10');
var hour11 = $('#hour11');
var hour12 = $('#hour12');
var hour13 = $('#hour1');
var hour14 = $('#hour2');
var hour15 = $('#hour3');
var hour16 = $('#hour4');
var hour17 = $('#hour5');
var currentHour = moment().format("HH");
console.log(currentHour);


// outline color of time slots as web page opens
var text9AM = $('#text9am');
var text10AM = $('#text10am');
var text11AM = $('#text11am');
var text12PM = $('#text12pm');
var text1PM = $('#text1pm');
var text2PM = $('#text2pm');
var text3PM = $('#text3pm');
var text4PM = $('#text4pm');
var text5PM = $('#text5pm');

var saveBtn = $(".saveBtn");

//button clicks, local storage

saveBtn.on("click", function() {
    localStorage.setItem("9AM",(text9AM.val()));
    localStorage.setItem("10AM",(text10AM.val()));
    localStorage.setItem("11AM",(text11AM.val()));
    localStorage.setItem("12AM",(text12PM.val()));
    localStorage.setItem("1PM",(text1PM.val()));
    localStorage.setItem("2PM",(text2PM.val()));
    localStorage.setItem("3PM",(text3PM.val()));
    localStorage.setItem("4PM",(text4PM.val()));
    localStorage.setItem("5PM",(text5PM.val()));
});

//append to web page

$('#text9am').append(localStorage).getItem("9AM");
$('#text10am').append(localStorage).getItem("10AM");
$('#text11am').append(localStorage).getItem("11AM");
$('#text12pm').append(localStorage).getItem("12AM");
$('#text1pm').append(localStorage).getItem("1PM");
$('#text2pm').append(localStorage).getItem("2PM");
$('#text3pm').append(localStorage).getItem("3PM");
$('#text4pm').append(localStorage).getItem("4PM");
$('#text5pm').append(localStorage).getItem("5PM");

// color cordinate all the inputs with the time

function allOptions() {
    $(".time-block").each(function () {
        var hourByHour = parseInt($(this).attr("id"));

        if (hourByHour > currentHour) {
            $(this).addClass("future")
        }
        else  if (hourByHour === currentHour) {
                $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })
}

allOptions();
