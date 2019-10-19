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



function same(array){

var arr = [];

	for(var i in array){
		for(var j in array){
		if(array[i].length === array[j].length && i != j){
			arr.push(array[i]);
		}	
	}
}

 return arr;
}
