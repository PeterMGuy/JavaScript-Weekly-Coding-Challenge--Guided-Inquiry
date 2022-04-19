//very easy
//var firstnumber= 21;
//var secondnumber= 17;
//var finalnumber = (firstnumber - secondnumber);

//console.log(`The difference between ${firstnumber} and ${secondnumber} is ${finalnumber}`);

//easy
//var person1 = "Bob";
//var person2 = "Steve";

//console.log(`${person2} has 2 more letters than ${person1}`);

//medium
//let myGreeting = 'THIS IS ALL CAPS!';

//console.log(myGreeting.toLowerCase());
//console.log('I am in all caps!'.toUpperCase());

//let candy = prompt("Type the word candy to check your caps");

//if (candy === "Candy") {
  //console.log("candy has normal caps on");}
//else if (candy === "CANDY") {
	//console.log("candy has all caps on");}
//else if (candy === "candy") {
	//console.log("candy has no caps on");}
//else {
	//console.log("error, use candy, Candy, or CANDY");}

//hard
//var x= 14;
//var y= 21;
//var add = ("x" + "y");
//var sub = ("x" - "y");
//var mul = ("x" * "y");
//var div = ("x" / "y");

//very hard
const operator = prompt("enter operator (either add, sub, mul or div) ");


const number1 = parseFloat(prompt('enter your first number '));
const number2 = parseFloat(prompt('enter your second number '));

let result;

//conditions
if (operator == 'add') {
    result = number1 + number2;
}
else if (operator == 'sub') {
    result = number1 - number2;
}
else if (operator == 'mul') {
    result = number1 * number2;
}
else if (operator == 'div') {
    result = number1 / number2;
}

else {
	console.log("error, wrong answer")
}

//the answer
console.log(`${number1} ${operator} ${number2} = ${result}`);
