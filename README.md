# Work Day Scheduler

To generate a calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature HTML and CSS powered by jQuery.

This application uses the Moment.js library to modify the date and time. 

To stay organized and manage time effectively this applicatoin will help deliever the following fuctions:
 - Add important events to a daily planner
 - Acceptance Criteria
 - As the planner opens then the current day is displayed at the top of the calendar
 - Scrolling down presentes the user with timeblocks for standard business hours
 - As the timeblock displays on the webpage that day then each timeblock is color coded to indicate whether it is in the past, present, or future
 - As the event is entered it is saved by a saved button for that timeblock then the text for that event is saved in local storage
 - And when the page is refreshed then the saved events persist

The following images demonstrates the application functionality:




GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar

WHEN I scroll down
THEN I am presented with timeblocks for standard business hours

WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future

WHEN I click into a timeblock
THEN I can enter an event

WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage

WHEN I refresh the page
THEN the saved events persist

