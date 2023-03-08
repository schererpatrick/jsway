const currentDay = prompt("What's the current day?");
switch (currentDay) {
case "Monday":
console.log("Tuesday is the following day");
break;
case "Tuesday":
console.log("Wednesday is the following day");
break;
case "Wednesday":
console.log("Thursday is the following day");
break;
case "Thursday":
console.log("Friday is the following day");
break;
case "Friday":
console.log("Saturday is the following day");
break;
case "Saturday":
console.log("Sunday is the following day");
break;
case "Sunday":
console.log("Monday is the following day");
break;
default:
    console.log("Not a valid weather type");
}