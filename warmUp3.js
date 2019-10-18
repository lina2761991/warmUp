// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors 

var females = ['hania' , 'ons' , 'insaf'];
var males = ['taha', 'adam', 'ahmed'];
var instructors = ['seif', 'youssef', 'matt'];

// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function middle(array){
		return array[(array.length-1)/2];
}

// 3-Change all the numbers in the array to be multiplied by two for even indexes.

var array = [1, 2, 3];

function each(array,f){
	for(var i in array){
		f(array[i],i);
}
}

function map(array1,f){
	var arr = [];
	each(array1, function(element, i){
		arr.push(f(element, i));
	});
		return arr;
	
}
	
	
	

function multiply(array){
	return map(array, function(element, i){
		if(i%2 ===0){
		
		return  element*2;}
		else {
			return element ;
		}
	});

	
}
multiply(array);
// [2, 2, 6]




