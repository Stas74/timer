/*
Implement an alarm clock / timer which will beep after 
a specified amount of time has passed. 
The user can specify an unlimited number of alarms 
using command line arguments

No numbers are provided: 
Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
An input is a negative number: 
Ignore/skip any numbers that are negative. We can't schedule anything in the past.
An input is not a number: 
Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

*/
// process.stdout.write('\x07');

let input = process.argv.slice(2);
let delay = 0;
let sec = 0;
const x = NaN;

for (const elem of input) {
  if (elem > 0 && elem !== x) {
    sec = elem * 1000;    
    setTimeout(() => {    
      process.stdout.write('\x07');
    }, delay + sec);
    delay += sec;
  }
}