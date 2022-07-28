/*Write a JavaScript function to remove duplicate items 
from an array (consider case sensitivity).*/

//Create an array with duplicated elements
let arrayOfFruits = ["Apple", "Mango", "apple", "orange", "Grapes",
                        "mango", "mango", "Avocado", "grapes"];




// Write a function with an array as a parameter 
function removeDuplicates(fruits){

// convert all array elements to lower case with a help of .map() to iterate over the array      
    let newFruits = fruits.map(function (element) {
    return element.toLowerCase();
    });        

// return the filtered array using a the .filter() method 
    return newFruits.filter(function (item, index) {
// remove first indexed elements only using the indexOf() method
        return newFruits.indexOf(item) === index;
    });    
}

console.log(removeDuplicates(arrayOfFruits)); 
