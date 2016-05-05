//alert( "Hello World!" );

console.log( "Hello World!" );

var firstName = "Al";

console.log( firstName );

var lastName = "Olsen";

console.log( lastName );

//Concatenation
console.log( firstName + " " + lastName );

//Sending values to HTML elements
document.getElementById("displayPad").innerHTML = "Hello World!";

//variable declaration
var age;
//variable definition
age 			= 30;

console.log( age );


//Math Operations
var x = 10;
var y = 5;
console.log( "X is : " + x );
console.log( "Y is : " + y );

console.log( "Adding x + y: " );
console.log( x + y );

console.log( "Subtracting y from x: ");
console.log( x - y );

console.log( "Multipliying x * y: ");
console.log( x * y );

console.log( "Dividing x / y:" );
console.log( x / y );

//modulus returns the remainder
console.log( "Get remainder of division: ");
console.log( x % y );

//Arrays
//Array declaration
var weekDays = new Array();
weekDays[0] = "Sunday";
weekDays[1] = "Monday";
weekDays[2] = "Tuesday";
weekDays[3] = "Wednesday";
weekDays[4] = "Thursday";
weekDays[5] = "Friday";
weekDays[6] = "Saturday";

console.log( weekDays[3] );

console.log( weekDays );

//Polymorphic array using Key/Value pairs
var person = new Array();
person['firstName'] = "Al";
person['lastName'] 	= "Olsen";
person['age'] 		= 30;
person['hasCats']	= true;
person['hasDogs'] 	= false;

console.log( person );

console.log( "Does "+ person['firstName'] + " have cats?");
console.log( person['hasCats'] );

//Multidimensional ARRAY
var musicGenres 	= ["Rock", "Dupstep", "Classical", "Rap", "Jazz"];
var instruments 	= ["Guitar", "Drums", "Bass", "Keyboard", "Flute"];
var favoriteThings 	= [ musicGenres, instruments ];

console.log( "My Favorite things:");
console.log( favoriteThings[0][0] );
console.log( favoriteThings[0][1] );
console.log( favoriteThings[0][2] );
console.log( favoriteThings[0][3] );
console.log( favoriteThings[0][4] );
console.log( favoriteThings[1][0] ); 
console.log( favoriteThings[1][1] ); 
console.log( favoriteThings[1][2] ); 
console.log( favoriteThings[1][3] ); 
console.log( favoriteThings[1][4] ); 
///Looping through a Multidimensional

for( m = 0; m < favoriteThings.length; m++ ){
	//console.log( "element "+ m + " of favoriteThings ");
	for( n = 0; n < favoriteThings[m].length; n++ ){
		//console.log( "element " + n + " of element "+ m + " of favoriteThings ");
		console.log( favoriteThings[m][n] );

		if( favoriteThings[m][n] == "Guitar"){
			//alert( "Hey, you like Guitar!!!")
		}
	}

}


console.log( " ---- for loop ---- ");
//Loops
for( i = 0; i < musicGenres.length ; i++){
	console.log( i + " " + musicGenres[i] );
}

console.log( " ---- for loop ends ---- ");

var counter = 0;

while( counter < instruments.length ){
	console.log( counter + " " + instruments[ counter] );
	counter++;
}


///Conditionals

var number1 = 10;

if( number1 < 20 ){
	console.log( "Number1 is less than 10" )
}else{
	console.log( "Number1 is greater than 10" )
}

var fn = "Al";




if( fn == "Jessica"){

}else if( fn == "Al"){

}else if( fn == "Jack"){

}


// Function Declaration
function askForName(){
	var userName = prompt( "What is your Name?" );

	switch( userName ){
		case "Jessica":
			console.log( "Hello, Jessica!");
			document.getElementById("displayPad").innerHTML = "Hello, Jessica!";
			break;
		case "Al":
			console.log( "What's up Al?!");
			document.getElementById("displayPad").innerHTML = "What's up Al?!";
			break;
		case "Jack":
			console.log( "Hey, Jack");
			document.getElementById("displayPad").innerHTML = "Hey, Jack";
			break;
		default:
			console.log( "Hi "+ userName + ". Nice to meet you")
			document.getElementById("displayPad").innerHTML = "Hi "+ userName + ". Nice to meet you";
	}
}

//Boolean
var isLightOn 	= false;
console.log( isLightOn );

function switchLights(){

	if( isLightOn ){
		//turn light off
		document.getElementById("room").style.backgroundColor = "black";
		isLightOn = false;
	}else{
		//turn light on
		document.getElementById("room").style.backgroundColor = "yellow";
		isLightOn = true;
	}

}


//Function Invokation
//askForName();





















