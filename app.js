var city = prompt("Enter your city name:");
if(city === "Karachi"){
  alert("Welcome to city of lights");
}


var gender = prompt("Enter your gender (male/female):");
if(gender === "male"){
  alert("Good Morning Sir");
}
if(gender === "female"){
  alert("Good Morning Ma’am");
}


var color = prompt("Enter traffic signal color (Red/Yellow/Green):");
if(color === "Red"){
  alert("Must Stop");
}
if(color === "Yellow"){
  alert("Ready to move");
}
if(color === "Green"){
  alert("Move now");
}


var fuel = prompt("Enter remaining fuel in car (in litres):");
if(fuel < 0.25){
  alert("Please refill the fuel in your car");
}

var a = 4;
if (++a === 5){
  alert("given condition for variable a is true");
}


var b = 82;
if (b++ === 83){
  alert("given condition for variable b is true");
}


var c = 12;
if (c++ === 13){
  alert("condition 1 is true");
}
if (c === 13){
  alert("condition 2 is true");
}
if (++c < 14){
  alert("condition 3 is true");
}
if (c === 14){
  alert("condition 4 is true");
}


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
  alert("The cost equals");
}


if (true){
  alert("True");
}
if (false){
  alert("False");
}


if("car" < "cat"){
  alert("car is smaller than cat");
}

var sub1 = +prompt("Enter marks obtained in Subject 1:");
var sub2 = +prompt("Enter marks obtained in Subject 2:");
var sub3 = +prompt("Enter marks obtained in Subject 3:");
var totalMarks = +prompt("Enter total marks:");


var obtainedMarks = sub1 + sub2 + sub3;
var percentage = (obtainedMarks / totalMarks) * 100;


var grade, remarks;

if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent";
}
else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
}
else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
}
else {
  grade = "Fail";
  remarks = "Sorry";
}


document.write("<h2>Marks Sheet</h2>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");


var secretNumber = 5;
var guess = +prompt("Guess the secret number (1 to 10):");

if (guess === secretNumber) {
  alert("Bingo! Correct answer");
}
else if (guess + 1 === secretNumber) {
  alert("Close enough to the correct answer");
}
else {
  alert("Try again!");
}


var num = +prompt("Enter a number to check divisibility by 3:");
if (num % 3 === 0) {
  alert("The number is divisible by 3");
} else {
  alert("The number is not divisible by 3");
}


var checkNum = +prompt("Enter a number to check even or odd:");
if (checkNum % 2 === 0) {
  alert("The number is even");
} else {
  alert("The number is odd");
}


var T = +prompt("Enter the temperature:");
if (T > 40) {
  alert("It is too hot outside.");
}
else if (T > 30) {
  alert("The Weather today is Normal.");
}
else if (T > 20) {
  alert("Today’s Weather is cool.");
}
else if (T > 10) {
  alert("OMG! Today’s weather is so Cool.");
}


var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
var operation = prompt("Enter operation (+, -, *, /, %):");
var result;

if (operation === "+") {
  result = num1 + num2;
}
else if (operation === "-") {
  result = num1 - num2;
}
else if (operation === "*") {
  result = num1 * num2;
}
else if (operation === "/") {
  result = num1 / num2;
}
else if (operation === "%") {
  result = num1 % num2;
}
else {
  alert("Invalid operation!");
}

if (result !== undefined) {
  alert("Result = " + result);
}