
//Calendar date information
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do, YYYY"));

var nineS = $('#text9am');
var tenS = $('#text10am');
var elevenS = $('#text11am');
var twelveS = $('#text12pm');
var oneS = $('#text1pm');
var twoS = $('#text2pm');
var threeS = $('#text3pm');
var fourS = $('#text4pm');
var fiveS = $('#text5pm'); 

var buttonElSaveBtns = $(".saveBtn");

var timeBlocks = moment().format("k");
console.log(timeBlocks);


var text_El9AM = $('#text9am');
if (timeBlocks > 9 ) {
    text_El9AM.addClass('past');
} else if (text_El9AM === 9 ) {
    text_El9AM.addClass('present');
} else if (timeBlocks < 9){
    text_El9AM.addClass('future');
}

var text_El10AM = $('#text10am');
if (timeBlocks > 10 ) {
    text_El10AM.addClass('past');
} 
if (text_El10AM === 10) {
    text_El9AM.addClass('present');
} 

if (timeBlocks < 10) {
    text_El10AM.addClass('future');
}

var text_El11AM = $('#text11am');
if (timeBlocks > 11) {
    text_El11AM.addClass('past');
} 

if (text_El11AM === 11) {
    text_El11AM.addClass('present');
} 
if (timeBlocks < 11) {
    text_El11AM.addClass('future');
}

var text_El12PM = $('#text12pm');
if (timeBlocks > 12 ) {
    text_El12PM.addClass('past');
}
if (text_El12PM === 12 ) {
    text_El12PM.addClass('present');
} 
if (timeBlocks < 12) {
    text_El12PM.addClass('future');
}

var text_El1PM = $('#text1pm');
if (timeBlocks > 13 ) {
    text_El1PM.addClass('past');
} 

if (text_El1PM === 13) {
    text_El1PM.addClass('present');
} 
if (timeBlocks < 13) {
    text_El1PM.addClass('future');
}

var text_El2PM = $('#text2pm');
if (timeBlocks > 14 ) {
    text_El2PM.addClass('past');
} 
if (text_El2PM === 14 ) {
    text_El2PM.addClass('present');
}
 if (timeBlocks < 14) {
    text_El2PM.addClass('future');
}

var text_El3PM = $('#text3pm');
if (timeBlocks > 15 ) {
    text_El3PM.addClass('past');
} 
if (text_El3PM === 15 ) {
    text_El3PM.addClass('present');
} 
if (timeBlocks < 15) {
    text_El3PM.addClass('future');
}

var text_El4PM = $('#text4pm');
if (timeBlocks > 16 ) {
    text_El4PM.addClass('past');
} 
if (text_El4PM === 16 ) {
    text_El4PM.addClass('present');
} 
if (timeBlocks < 16) {
    text_El4PM.addClass('future');
}

var text_El5PM = $('#text5pm');
if (timeBlocks > 17 ) {
    text_El5PM.addClass('past');
} 
if (text_El5PM === 17 ) {
    text_El5PM.addClass('present');
} if (timeBlocks < 17) {
    text_El5PM.addClass('future');
} 


buttonElSaveBtns.on("click", jquerySaveBtn);

function jquerySaveBtn() {
    localStorage.setItem($(this).siblings()[1].id, $(this).siblings()[1].value)
console.log(buttonElSaveBtns);

}

// taking it out of local storage and adding it to text area
function ninePrint() {
    var nineKey = localStorage.getItem('text9am');
    console.log(nineKey)
    nineS.text(nineKey);
    
}

ninePrint();

function tenPrint() {
    var tenKey = localStorage.getItem('text10am');
    console.log(tenKey)
    tenS.text(tenKey);
    
}

tenPrint();


function elevenPrint() {
    var elevenKey = localStorage.getItem('text11am');
    console.log(elevenKey)
    elevenS.text(elevenKey);
}

elevenPrint();


function twelvePrint() {
    var twelveKey = localStorage.getItem('text12pm');
    console.log(twelveKey)
    twelveS.text(twelveKey);
}

twelvePrint();


function onePrint() {
    var oneKey = localStorage.getItem('text1pm');
    console.log(oneKey)
    oneS.text(oneKey);
}

onePrint();

function twoPrint() {
    var twoKey = localStorage.getItem('text2pm');
    console.log(twoKey)
    twoS.text(twoKey);
}

twoPrint();


function threePrint() {
    var threeKey = localStorage.getItem('text3pm');
    console.log(threeKey)
    threeS.text(threeKey);
}

threePrint();


function fourPrint() {
    var fourKey = localStorage.getItem('text4pm');
    console.log(fourKey)
    fourS.text(fourKey);
}

fourPrint();

function fivePrint() {
    var fiveKey = localStorage.getItem('text5pm');
    console.log(fiveKey)
    fiveS.text(fiveKey);
}

fivePrint();



