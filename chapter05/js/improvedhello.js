const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");


function sayHello(firstName, lastName) {
    const message = `Hello, ${firstName} ${lastName}!`;
    return message;
    }

console.log(sayHello(firstName, lastName));