
$( document ).ready(function() {


function submit(){

  event.preventDefault();

  $('body').removeClass();

//listens for click of update button
//stores options in var city

//makes the background nyc.jpg if "New York" or "New York City" or "NYC"

var city = $('#city-type').val().toLowerCase();

if (city == "nyc" || city == "new york" || city == "new york city") {

$('body').attr('class', 'nyc');

}


//makes the background sf.jpg if "San Francisco" or "SF" or "Bay Area"

if (city == "san francisco" || city == "sf" || city == "bay area") {

$('body').attr('class', 'sf');

}

//makes the background la.jpg if "Los Angeles" or "LA" or "LAX"

if (city == "los angeles" || city == "la" || city == "lax") {

$('body').attr('class', 'la');

}

//makes the background austin.jpg if "Austin" or "ATX"

if (city == "austin" || city == "atx") {

$('body').attr('class', 'austin');

}

//makes the background sydney.jpg if "Sydney" or "SYD"

if (city == "sydney" || city == "syd") {

$('body').attr('class', 'sydney');

}
}

//reset the city name box

$('#city-type').val("");

$('#submit-btn').click(submit);


});