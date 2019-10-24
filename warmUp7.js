// 1-using + operator combine your partner first and last name .
// 2-find if the number 13 is a multiple of 3 or not.
// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]
// 4-calculate your age in seconds.
// your code is here
//1
function combineName(first, last){
	return 'your partner full name is: ' + first + ' ' + last; // we return the first and last name we assigned as parameters 
}
//2
function testMultiple(n){
	if(n%3 === 0){ // we check the modul of the number by 3 if its divided by 3
	return true; // we return true 
	}
	return false // if not we return false 
}
//3
function calculateAverge(array){// we give our function an array as parameter
	var sum = 0;                   // we intial the sum of the values inside the array to 0
	for(var i =0; i<array.length; i++){ // we iterate our array
		 sum = sum + array[i];  // everytime we ll add the new element of the array to the sum 
		 
	} 
	return sum / array.length; // we calculate the averge by dividing the sum of all ages(elements of array) by the number of ages(length of array)
}
//4
function ageSeconds(age){ // we put the age as our parameter 
	return age*367*24*60*60 ; // we return the age converted to seconds because the age is in years so we convert age to days ,then days to hours then hours to minutes and minutes to seconds 
}

