// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

function gcd(x, y) {
 if(x>0 && y>0){
 if(!y){
	return x;}
  return gcd(y, x%y);
} 
else {
 console.log( x + 'and' + y + 'need to be positive');
}

}


// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.



function sum(a, b) {
    if (b != 0) {
      return sum(a + 1, b - 1);
    } else {
      return a;
    }
}





