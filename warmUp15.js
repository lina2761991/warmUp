// write a function that takes a string as an argument 
// and returns the string reversed word by word 
// Example : reverseStr("hi there how is the weather today") ==>> "today weather the is how there hi"
//
//
// Note : you can`t use any built-in functions .

function reverse(string){
	var s = " "; // we create and empty string 
	var array = string.split(' ');// we transform the string to an array 
	for(var i=array.length-1;i>=0;i--){ // we iterate each element of the array 
		s = s + array[i] + " " ; // we add each element of the array starting from the end 
	}
	return s ;// we display our string 
}


