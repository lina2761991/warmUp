// 1-create a data model to represent your classmates
classMate = {
	name : firstName,
	lastName : lastName, 
	gender: gender,
	nationality : nationality
}
//     -think of different attributes of your classmates? what do all of them have ?
firstName , lastName, gender and nationality
//     -create a factory function.
function makeClassMate(firstName, lastName, gender, nationality){
	return {
		firstName : firstName,
		lastName : lastName,
		gender : gender,
		nationality : nationality
     }
  }
var classmate1 = makeClassMate('lina', 'ben salem', 'female', 'tunisian');
var classmate2 = makeClassMate('taha', 'mejri', 'male', 'tunisian');

//     -create an array to hold the classmates that you created and what you created to it .  
var arr = [classmate1, classmate2];
//     -write a function called displayFriend that takes a mate as an argument and returns the important information in a readable way.
function displayFriend(classmate){
	return 'firstName: ' + classmate.firstName + ', ' + 'lastName: ' + classmate.lastName +', '+ 'gender: ' + classmate.gender +', ' + 'nationality: ' +classmate.nationality;
}
//     -write a function called addFriend that takes a mate as an argument and add it to you classMates arraya.
//var classmate3 = makeClassMate('ali', 'jalal', 'male', 'libian');
function addFriend(mate){
	arr.push(mate);
	return arr;
}
//addFriend(classmate3);
//     -calculate the number of male friends that your class have by writing a function called nbOfMale.
function nbOfMale(arr){
	var count = 0;
	for(var i=0; i<arr.length; i++)
	if(arr[i].gender === "male"){
		count++;
	}
	return count;
}
//     -Write a function searchMates that, given a query and an array of Mates,
//           searches the array of mates for "matching" mate. You will decide what way you want to write your search algorithm.
function searchMates(arr, query){
	for(var i=0; i<arr.length; i++){
		if(arr[i].firstName === query.toLowerCase()){
			return arr[i];
		}
		else {
			return "the mate you are looking for doesnt exist";
		}
	}
}