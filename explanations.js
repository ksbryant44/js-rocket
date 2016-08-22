// EXPLANATIONS

// Variables
	// string
var favColor = 'blue';
	// array
var myFavColors = ['blue', 'red', 'green'];
	// number
var numOfFavColors = 3;
	// boolean
var hasGotFavColors = true;
	// object
var richObject = {
	firstName: 'Rich',
	lastName: 'Armstrong',
	favColors: ['blue', 'red', 'green'],
	yearsAlive: 103,
	isMale: true
}


// Functions
var fullname = function (firstname, secondname) {
	return firstname + ' ' + secondname;
}

var area = function (width, height) {
	return width * height;
}

var whatIsMyFavColor = function () {
	// only this top part will run, because nothing runs after a return
	return false;

	return true;

	return 'blue';
}

var doSomething = function () {
	console.log("do Something!!!");
}


// If-else statement
// AND use &&
// OR use ||

var name1 = 'Rich';
var name2 = 'Bob';

if (name1 == 'Rich' && name2 == 'Bob') {
	// do something
	alert('true 1 !!!');
} else if (name2 == 'Rich') {
	alert('true 2 !!!')
} else {
	alert('false!!!')
}

var number1 = 10;
var number2 = 100;

if (number1 < number2) {
	// do something
	alert('true!!!');
} else {
	alert('false!!!')
}

if ('male' == 'male') {
	// do something
	alert('male');
}

if (1 == 2) {
	// do something
}

if (1 == 1) {
	// do something
}

if (10 > 1) {
	// do something
}

if (10 >= 1) {
	// do something
}



