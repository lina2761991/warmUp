// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?
// Examples:

// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"

function count (str){
	var arrn = [];
	var arr = str.split('');
	for (var i=0;i<arr.length; i++) {
		var  count = 0;
		for(var j=i;j>=0;j--){ 
			if(arr[i] === arr[j]){
			 count ++ ;
			}		
		 }
		arrn.push(count);
	}
	return arrn.join("");
}