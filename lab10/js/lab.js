/*
Author: Sohinee Saha
Email: stsaha@ucsc.edu
Assignment: Art 101, Lab 10
Created: November 2021
*/

function changeColor(color)
{
    document.body.style.background = color;
}
function yellow()
{
    changeColor('yellow');
}
function green()
{
    changeColor('green');
}
function red()
{
    changeColor('red');
}
function blue()
{
    changeColor('lightblue');
}

function nameSort()
{
     document.getElementById("output").innerHTML = document.getElementById('name').value + " ";
     var userName =  document.getElementById("name").value;
     newName = userName.toLowerCase();
     var nameArray = newName.split('');
     var sortArray = nameArray.sort();
     var joinArray = sortArray.join('');
     console.log("final array =", joinArray);
     document.writeln("This would be your name if all the letters were in alphabetical order: ", joinArray, "</br>");
}
