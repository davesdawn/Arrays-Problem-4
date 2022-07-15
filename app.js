/*Write a JavaScript function to remove duplicate items 
from an array (consider case sensitivity).*/

//Create an array with duplicated elements
let arrayOfFruits = ["Apple", "Mango", "apple", "orange", "Grapes",
                        "mango", "mango", "Avocado", "grapes"];

// convert all array elements to lower case with a help of .map() to iterate over the array  
let newFruits = arrayOfFruits.map(function (element) {
    return element.toLowerCase();
});

// Write a function with an array as a parameter 
function removeDuplicates(fruits){

// return the filtered array using a the .filter() method 
return fruits.filter(function (item, index) {
// remove first indexed elements only using the indexOf() method
// Also use the .toLowerCase() method convert all strings to lower case    
    return fruits.indexOf(item.toLowerCase()) === index;
});    
}

console.log(removeDuplicates(newFruits)); 
//