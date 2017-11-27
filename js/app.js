// $('h1').text('Something Else'); //

// var all_headers = document.querySelectorAll('h1');
// for (var i = 0; i < all_headers.length; i++) {
// 	// all_headers[i].style.backgroundColor = 'orange';
// 	all_headers[i].innerText = 'Something Else';
// }


// $('.subject-text').css('background', 'red');

// $('#')
// Math.floor() rounds down to the nearest whole number
// Math.random() generates a random floating number(decimal) between 0 and 1 --- .223423424123412341 .3
// console.log(Math.floor(Math.random() * 3));
// console.log(Math.random());
// var ranNumber = 
// var test = 'test';
// console.log('works');

// $(document).ready(function() {
// 	// run your javascript
// }); 
// Emmet
// Undefined
// var something;

// // Not Defined
// console.log(something);


// Run this code anytime we need it be be ran
// All code and variables are private(locked) in this function
// function getRandomNumber() {
// 	test = 'something else';
// 	console.log(test);


// 	test = 'something else two';
// 	console.log(test);


// 	test = 'something else three';
// 	console.log(test);


// 	test = 'something else four';
// 	console.log(test);
// 	// private world inside the function
// 	// this code will only be ran when the function is called
// 	console.log('Function Called');
// }

// getRandomNumber();
// getRandomNumber();
// getRandomNumber();


// function one() {
// 	function two() {
// 		function three() {

// 		}
// 	}
// }

var wins = 0;
var losses = 0;
var did_win = false;

function endGame() {
	if ( did_win ) {
		wins++;
	} else {
		losses++;
	}

	$('#wins').text('Wins: ' + wins);
	$('#losses').text('Losses: ' + losses);
}

endGame();


function getRanNum() {
	return Math.floor(Math.random() * 11); // 0
}
// scope -- Global & Local
// var someVar = 'some var';
// console.log(someVar);

$('#btn').on('click', function() {
	// var another = 'another';
	
	// someVar = 'changed';
	// console.log(someVar);
	$('#test').text(getRanNum());
});

// console.log(another);


// function changeGlobal() {
// 	someVar = 'changed';
// 	console.log(someVar);
// }

// function changeGlobal2() {
// 	console.log('global 2: ' + someVar);
// 	someVar = 'second';
// 	console.log(someVar);
// }

// var someVar = 'some var';
// console.log(someVar);

// changeGlobal(); // 'changed'

// changeGlobal2();

// console.log('After function calls: ' + someVar);

// console.log(getRanNum()); // 


// function test() {
// 	return 'handed back';
// }

// console.log(test());// 
// var asdfsalkfjdslks = 'asldfkjaslfkj';
// var str = 'some other string';
// step 1
function someFunction(str, num) {
	// str = 'changed the text';
	// str = 'some other string';
	console.log(str);
}
// Callbacks
// step 2
someFunction('some other string', 13223424); // THE FUTURE











