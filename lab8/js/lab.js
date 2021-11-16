/*
Author: Sohinee Saha
Email: stsaha@ucsc.edu
Assignment: Art 101, Lab 8
Created: October 2021
*/

//create array of numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original Array: ", numbers);

//create function to square numbers of array
function square (x)
{
    var squared = x * x;
    return squared;
}
var squares = numbers.map(square);
console.log("Squared Array: ", squares);

//use anon function as callback to cube numbers of array
var cubes = numbers.map (function(x)
{
    return x * x * x;
})
console.log("Cubed Array: ", cubes);
