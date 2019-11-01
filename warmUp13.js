/* 1. Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

        Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

        Example:

            solution('XXI'); // should return 21

        Help:

            Symbol    Value
            I          1
            V          5
            X          10
            L          50
            C          100
            D          500
            M          1,000 
    
    2. Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
        Examples:

        toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

        toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
    
    3. In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
        Example

            filter_list([1,2,'a','b']) == [1,2]
            filter_list([1,'a','b',0,15]) == [1,0,15]
            filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
*/

//1
function roman(str){
	var a = str.split('');
	var b = [];

	for(var i =0;i<a.length;i++){
		if(a[i] === 'I'){
			a[i] = 1;
		}
		else if(a[i] === 'V'){
			a[i]=5 ;
		}
		else if(a[i] === 'X'){
       a[i] = 10;
		}
		
		else if(a[i] === 'L'){
			 a[i] = 50;
		
		}
		else if(a[i] === 'C'){
			a[i] = 100;
		}
		else if(a[i] ==='D'){
			a[i] = 500;
		}
		else if(a[i] ==='M'){
			a[i] = 1000;
		}


	}

	var c = 0;
	for(var j =0;j<a.length;j++){
    //console.log(a[j].length);
			if(a[j].length === a[j+1].length){
			c = c+a[j]*2;
		}
	}
	return c;
}

//2
function convert(str){
	var arr = str.split('');
		if(arr.includes('-')){
			for ( var i=0;i<arr.length;i++){
				if(arr[i] === "-"){
					arr[i+1] = arr[i+1].toUpperCase();
				}
			}
			var finalstr= arr.join('').split('-').join('');
		}

		else if(arr.includes('_')){
      for ( var i=0;i<arr.length;i++){
       if(arr[i] === "_"){
					arr[i+1] = arr[i+1].toUpperCase();
				}
			}
			var finalstr= arr.join('').split('_').join('');
		}
		
	return finalstr;
}

//3

function filter_list(arr){
	var newarr = [];
		for(var i =0;i<arr.length;i++){
			if(typeof(arr[i])==='number'){
				newarr.push(arr[i]);
			}
		}
	return newarr;
}