var moment = require('moment');

console.log(moment().format());

///Unix timestamp is given in seconds
// January 1st 1970 @ 12:00am -> 0

var now = moment();

console.log('Current timestamp', now.unix() );


var timestamp = 1488465693;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format("MMM D, YY @ h:mm a"));

// JANUARY 3rd, 2016 @ 12:13 AM
console.log('current moment', moment().format('MMMM Do, YYYY @ h:m A'));
