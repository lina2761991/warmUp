/* your task is to write a function that returns the smallest and largest integers in an unsorted string.
Input
    Your function will receive two arguments:

        A string comprised of integers in an unknown range; these numbers will be out of order
        An integer value representing the size of the range

Output
    Your function should return the starting (minimum) and ending (maximum) numbers of the range in the form of an array/list comprised of two integers.
    Test Example

    let inputString = '1568141291110137';

    mysteryRange(inputString,10) // [6,15]

        -The 10 numbers in this string are:
        -15 6 8 14 12 9 11 10 13 7
        -Therefore the range of numbers is from 6 to 15

Technical Details

    -The maximum size of a range will be 100 integers
    -The starting number of a range will be: 0 < n < 100
 */

function min (results){
	var min = results[0];
	for (var i =0; i<results.length;i++){
   	if(results[i]<min){
   		min = results[i];
   	}
   	
   }
   return min;
}

function max (results){
	var max = results[0];
	for (var i =0; i<results.length;i++){
   	if(results[i]>max){
   		max = results[i];
   	}
   	
   }
   return max;
}

  function weird(str, n){
   var a = str.split('');
   var results = [];
   var display = [];

   if(a.length%n ===0){
   var x = (a.length)/n;
   while (a.length) {
    results.push(a.splice(0,x).join(''));
   }

   var b = max (results);
   var c = min(results);
    }

    else {
   var x = (a.length)/n;
   while (a.length-1>x) {
    results.push(a.splice(0,x).join(''));
   }
    results.push(a.splice(0,x+1).join(''));

   var b = max (results);
   var c = min(results);
    }
   
   display.push(c);
   display.push(b);
   return display;
   }
 