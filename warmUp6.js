 // 1-implement the function mult that takes a single parameter n, and computes the multiplication of all integers up to n 
 //starting from 0, e.g.:
 mult(3); // => 6
 mult(4); // => 24
 function mult(n) {
 // your code is here
 var mult = 1 ; // we initialize our result to 1
 for(var i = 1 ; i<=n ; i++){ //we iterate  through the numbers starting from 1 to n 
 	mult = mult * i; // each time we ll multiply the number to our previous result 
 }
 return mult; // we return our multiplication result 
}

// 2- Use a while loop to build a single string with the numbers 1 through n
// separated by the number next to the current number. 
//Have it return the new string.
// eg= 1 2 2 3 3 4 4 5 5 6 6 ...

function str (n){ // we create  our function which has a parameter n
	var s = "1"; // we initilize s which is going to be our return string to 1 
	var i = 2; //we start countring numbers from 2 
	while( i<=n){ // we keep our instructions going as long as i<=n
		s = s + ' ' + i + ' ' + i; // we assign to the string everytime the previous number and the next number separated with that next number 
		i++; // we pass to the next number
	}
	return s; // we return our string 
}

