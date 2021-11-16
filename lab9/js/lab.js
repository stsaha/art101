/*
Author: Sohinee Saha
Email: stsaha@ucsc.edu
Assignment: Art 101, Lab 9
Created: October 2021
*/

//create outputEl var using getElementById
var outputEl = document.getElementById("output");

//create elements and alter text using createElement and createTextNode
var new1El = document.createElement("p");
new1El = document.createTextNode("This is Lab 9!");
var new2El = document.createElement("p");
new2El = document.createTextNode("The next lab will be Lab 10!");

// append both elements using appendChild
outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

var x = document.URL;
document.getElementById("output").innerHTML = x;
