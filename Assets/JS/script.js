// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {

  // Add code to display the current date in the header of the page.
    var currentDay = dayjs().format('[Todays Date is:] MMM DD, YYYY');
  $('#currentDay').text(currentDay);

  // Add a listener for click events on the save button. This code should
  $('.saveBtn').on('click', function(event) {
    event.preventDefault();

  // Get the id of the parent time-block
    var timeBlockId = $('.time-block').attr('id');

  // Get the user input from the textarea
    var userInput = $('textarea').val();

  // Save the user input in local storage with the time block id as the key
    localStorage.setItem(timeBlockId, userInput);
  });


  
  $('.time-block').each(function() {
  // Day.js used to get the current hour in 24-hour time.
    var currentHour = dayjs().hour();

  // parseInt used to select the id of each div with the class .time-block and turn it into an integer.
    var timeBlockHour = parseInt($(this).attr('id'));

  // Added code to apply the past, present, or future class to each time block
  // by comparing the id to the current hour. The id attribute of each time-block
  // Used to conditionally add or remove the past, present, and future classes.
    if (timeBlockHour < currentHour) {
      $(this).addClass('past');
    } else if (timeBlockHour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }

  // Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. The id attribute of each
  // time-block can be used to retrieve the user input from local storage.
    var timeBlockId = $(this).attr('id');
    var savedUserInput = localStorage.getItem(timeBlockId);

    if (savedUserInput) {
      $(this).find('textarea').val(savedUserInput);
    }

  });



});
