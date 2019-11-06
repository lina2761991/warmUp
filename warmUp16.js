// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

// Example 1:
// Input: text = "nlaebolko"
// Output: 1

// Example 2:
// Input: text = "loonbalxballpoon"
// Output: 2

// Example 3:
// Input: text = "RebootKamp"
// Output: 0
 
// Constraints:
// 1 <= text.length <= 10^4
// text consists of lower case English letters only.


function numberInstance(string){

	var arr = string.split('');

	var countb= 0;
	var counta =0 ;
	var countl= 0;
	var counto =0 ;
	var countn =0 ;

	var instance = 0;

	while(arr.length>2){

	for(var i=0; i<arr.length;i++){
		
		if(arr[i] === 'b'  ){
			arr.splice(i,1);
			countb = countb +1;
	
		}
		 if(arr[i] === 'a'  ){
			arr.splice(i,1);
			counta = counta +1;
		}
		if(arr[i] === 'l'  ){
			arr.splice(i,1);
			countl = countl +1;

		}
		//console.log(arr);
		if(arr[i] === 'o'  ) {
			arr.splice(i,1);
			counto = counto +1;
		
		}
		if(arr[i] === 'n'  ){
			arr.splice(i,1);
			countn = countn +1;
		}
	}
 }

	if( countb === 1 && counta === 1 && countl === 2 && counto === 2 && countn === 1){
		instance = instance + 1;
	}

	return instance;
}


