/*
Author: Sohinee Saha
Email: stsaha@ucsc.edu
Assignment: Art 101, Lab 7
Created: October 2021
*/


function sortUserName()
{
  //take string name as user input
  var userName = window.prompt("Hello! What is your name?");
  newName = userName.toLowerCase();
  console.log ("userName =", newName);

  //split string by characters and into array
  var nameArray = newName.split('');
  console.log ("name array =", nameArray);

  //sort characters in array in alphabetical order
  var sortArray = nameArray.sort();
  console.log("sorted array =", sortArray);

  //join characters in array
  var joinArray = sortArray.join('');
  console.log("final array =", joinArray);

  return joinArray;
}

document.writeln("This would be your name if all the letters were in alphabetical order: ", sortUserName(), "</br>");
