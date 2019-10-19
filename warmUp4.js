// 1-Write a function that takes a string as an input and returns the reverse of each letter 
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o1l2l3e4h"


function reverse (string){
	var string2 = string.split('');
	var n = string2.length-1;
	var stringn2 = "";

		while(n>=0){
			stringn2 =  stringn2  + string2[n];
	   
	       n--;
		}
		return stringn2;

}


// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]

function list(array){

	var arr = [];
	var lengtharr = "";
	for(var i=0;i<array.length; i++){

	    lengtharr =lengtharr +(array[i].length);
		}
		arr = lengtharr.split('');

}

